import os, re, emoji
from flask import Flask, request, jsonify
from flask_cors import CORS
from googleapiclient.discovery import build
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk
from dotenv import load_dotenv
from collections import Counter
import langdetect
from langdetect import detect, DetectorFactory
import random

# Set seed for consistent language detection
DetectorFactory.seed = 0

load_dotenv()
nltk.download('vader_lexicon')

YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY") or "AIzaSyBgKrTmQwQLpJMn64VzQSqqG5UFimglX1s"
app = Flask(__name__)
CORS(app)

sia = SentimentIntensityAnalyzer()
youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

# Multi-language sentiment dictionaries
HINDI_POSITIVE_WORDS = [
    'अच्छा', 'बहुत अच्छा', 'शानदार', 'बेहतरीन', 'उत्कृष्ट', 'महान', 'दिलचस्प', 
    'पसंद', 'प्रेरणादायक', 'सुंदर', 'आकर्षक', 'लाजवाब', 'जबरदस्त', 'बेहतरीन',
    'अद्भुत', 'अविश्वसनीय', 'शानदार', 'उत्कृष्ट', 'बेहतरीन', 'महान', 'दिलचस्प'
]

HINDI_NEGATIVE_WORDS = [
    'बुरा', 'खराब', 'बेकार', 'निराशाजनक', 'बेहूदा', 'बेमतलब', 'बेकार', 
    'नापसंद', 'घृणित', 'बेहूदा', 'बेकार', 'निराशाजनक', 'बेहूदा', 'बेमतलब'
]

BENGALI_POSITIVE_WORDS = [
    'ভালো', 'খুব ভালো', 'চমৎকার', 'অসাধারণ', 'দারুণ', 'বাহ', 'মজার', 
    'পছন্দ', 'উদ্দীপক', 'সুন্দর', 'আকর্ষণীয়', 'অসাধারণ', 'চমৎকার', 'দারুণ'
]

BENGALI_NEGATIVE_WORDS = [
    'খারাপ', 'খুব খারাপ', 'বাজে', 'নিরাশাজনক', 'বাজে', 'অপছন্দ', 'ঘৃণ্য', 
    'বাজে', 'নিরাশাজনক', 'বাজে', 'অপছন্দ', 'ঘৃণ্য', 'বাজে', 'নিরাশাজনক'
]

ASSAMESE_POSITIVE_WORDS = [
    'ভাল', 'বৰ ভাল', 'চমৎকাৰ', 'অসাধাৰণ', 'দাৰুণ', 'বাহ', 'মজাৰ', 
    'পছন্দ', 'উদ্দীপক', 'সুন্দৰ', 'আকৰ্ষণীয়', 'অসাধাৰণ', 'চমৎকাৰ', 'দাৰুণ'
]

ASSAMESE_NEGATIVE_WORDS = [
    'বেয়া', 'বৰ বেয়া', 'বাজে', 'নৈৰাশ্যজনক', 'বাজে', 'অপছন্দ', 'ঘৃণ্য', 
    'বাজে', 'নৈৰাশ্যজনক', 'বাজে', 'অপছন্দ', 'ঘৃণ্য', 'বাজে', 'নৈৰাশ্যজনক'
]

def fetch_video_details(video_id):
    try:
        req = youtube.videos().list(
            part="snippet,statistics", id=video_id
        )
        res = req.execute()
        if res.get("items"):
            video = res["items"][0]["snippet"]
            stats = res["items"][0]["statistics"]
            return {
                "title": video["title"],
                "channelTitle": video["channelTitle"],
                "totalComments": int(stats.get("commentCount", 0))
            }
    except Exception as e:
        print(f"Error fetching video details: {e}")
    return None

def fetch_comments(video_id, limit=None):
    comments, next_token = [], None
    while limit is None or len(comments) < limit:
        req = youtube.commentThreads().list(
            part="snippet", videoId=video_id, maxResults=100, pageToken=next_token
        )
        res = req.execute()
        for item in res.get("items", []):
            text = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]
            comments.append(text)
        next_token = res.get("nextPageToken")
        if not next_token:
            break
    return comments[:limit] if limit else comments

def extract_emojis(text):
    """Extract all emojis from text"""
    return [char for char in text if emoji.is_emoji(char)]

def clean_for_sentiment(text):
    """Clean text for sentiment analysis while preserving emojis for separate analysis"""
    # Remove URLs but keep emojis
    text = re.sub(r"http\S+", "", text)
    return text.strip()

def detect_language_safe(text):
    """Safely detect language with fallback to English"""
    try:
        if len(text.strip()) < 3:
            return 'en'
        lang = detect(text)
        # Map language codes to our supported languages
        lang_map = {
            'hi': 'hindi',
            'bn': 'bengali', 
            'as': 'assamese',
            'en': 'english'
        }
        return lang_map.get(lang, 'english')
    except:
        return 'english'

def get_sentiment_multi_language(text, language):
    """Get sentiment based on detected language"""
    cleaned_text = clean_for_sentiment(text)
    
    # For English, use NLTK VADER
    if language == 'english':
        score = sia.polarity_scores(cleaned_text)["compound"]
        if score > 0.05:
            return "positive"
        if score < -0.05:
            return "negative"
        return "neutral"
    
    # For other languages, use word-based analysis
    text_lower = cleaned_text.lower()
    
    if language == 'hindi':
        positive_count = sum(1 for word in HINDI_POSITIVE_WORDS if word in text_lower)
        negative_count = sum(1 for word in HINDI_NEGATIVE_WORDS if word in text_lower)
    elif language == 'bengali':
        positive_count = sum(1 for word in BENGALI_POSITIVE_WORDS if word in text_lower)
        negative_count = sum(1 for word in BENGALI_NEGATIVE_WORDS if word in text_lower)
    elif language == 'assamese':
        positive_count = sum(1 for word in ASSAMESE_POSITIVE_WORDS if word in text_lower)
        negative_count = sum(1 for word in ASSAMESE_NEGATIVE_WORDS if word in text_lower)
    else:
        # Fallback to English
        score = sia.polarity_scores(cleaned_text)["compound"]
        if score > 0.05:
            return "positive"
        if score < -0.05:
            return "negative"
        return "neutral"
    
    if positive_count > negative_count:
        return "positive"
    elif negative_count > positive_count:
        return "negative"
    else:
        return "neutral"

@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    video_id = data.get("videoId")
    if not video_id:
        return jsonify({"error": "Missing videoId"}), 400
    
    # Fetch video details first
    video_details = fetch_video_details(video_id)
    if not video_details:
        return jsonify({"error": "Video not found or access denied"}), 404
    
    # Fetch and analyze comments
    comments = fetch_comments(video_id)
    
    # Analysis containers
    totals = {"positive": 0, "neutral": 0, "negative": 0}
    language_stats = {"english": 0, "hindi": 0, "bengali": 0, "assamese": 0, "other": 0}
    all_emojis = []
    emoji_sentiment = {"positive": [], "negative": [], "neutral": []}
    
    for comment in comments:
        # Language detection
        language = detect_language_safe(comment)
        language_stats[language] = language_stats.get(language, 0) + 1
        
        # Emoji extraction
        comment_emojis = extract_emojis(comment)
        all_emojis.extend(comment_emojis)
        
        # Sentiment analysis
        sentiment = get_sentiment_multi_language(comment, language)
        totals[sentiment] += 1
        
        # Track emojis by sentiment
        if comment_emojis:
            for emoji_char in comment_emojis:
                emoji_sentiment[sentiment].append(emoji_char)
    
    # Emoji analysis
    emoji_counter = Counter(all_emojis)
    top_emojis = emoji_counter.most_common(10)
    
    # Emoji sentiment analysis
    emoji_sentiment_stats = {}
    for emoji_char, count in top_emojis:
        positive_count = emoji_sentiment["positive"].count(emoji_char)
        negative_count = emoji_sentiment["negative"].count(emoji_char)
        neutral_count = emoji_sentiment["neutral"].count(emoji_char)
        
        emoji_sentiment_stats[emoji_char] = {
            "total": count,
            "positive": positive_count,
            "negative": negative_count,
            "neutral": neutral_count,
            "dominant_sentiment": "positive" if positive_count > negative_count else "negative" if negative_count > positive_count else "neutral"
        }
    
    # Calculate percentages
    total_comments = len(comments)
    percentages = {
        "positive": round((totals["positive"] / total_comments) * 100, 1) if total_comments > 0 else 0,
        "neutral": round((totals["neutral"] / total_comments) * 100, 1) if total_comments > 0 else 0,
        "negative": round((totals["negative"] / total_comments) * 100, 1) if total_comments > 0 else 0
    }
    
    return jsonify({
        "totals": totals,
        "percentages": percentages,
        "count": total_comments,
        "videoTitle": video_details["title"],
        "channelName": video_details["channelTitle"],
        "totalComments": video_details["totalComments"],
        "languageBreakdown": language_stats,
        "emojiAnalysis": {
            "totalEmojis": len(all_emojis),
            "uniqueEmojis": len(emoji_counter),
            "topEmojis": [{"emoji": emoji, "count": count} for emoji, count in top_emojis],
            "emojiSentimentStats": emoji_sentiment_stats
        },
        "supportedLanguages": ["English", "Hindi", "Bengali", "Assamese"]
    })

if __name__ == "__main__":
    app.run(debug=True) 