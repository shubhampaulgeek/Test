import os, re, emoji
from flask import Flask, request, jsonify
from flask_cors import CORS
from googleapiclient.discovery import build
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk
from dotenv import load_dotenv

load_dotenv()
nltk.download('vader_lexicon')

YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY") or "AIzaSyBgKrTmQwQLpJMn64VzQSqqG5UFimglX1s"
app = Flask(__name__)
CORS(app)

sia = SentimentIntensityAnalyzer()
youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

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

def fetch_comments(video_id, limit=50000):
    comments, next_token = [], None
    while len(comments) < limit:
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
    return comments[:limit]

def clean(text):
    text = emoji.replace_emoji(text, "")
    text = re.sub(r"http\\S+", "", text)
    return text

def get_sentiment(text):
    score = sia.polarity_scores(clean(text))["compound"]
    if score > 0.05:
        return "positive"
    if score < -0.05:
        return "negative"
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
    totals = {"positive": 0, "neutral": 0, "negative": 0}
    for c in comments:
        sentiment = get_sentiment(c)
        totals[sentiment] += 1
    
    return jsonify({
        "totals": totals, 
        "count": len(comments),
        "videoTitle": video_details["title"],
        "channelName": video_details["channelTitle"],
        "totalComments": video_details["totalComments"]
    })

if __name__ == "__main__":
    app.run(debug=True) 