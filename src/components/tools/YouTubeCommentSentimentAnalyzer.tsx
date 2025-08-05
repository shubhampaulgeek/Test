import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';

const API_URL = '/api/analyze';
const COLORS = ['#4caf50', '#ffca28', '#e53935'];

// Function to get sentiment color
const getSentimentColor = (sentiment: string): string => {
  switch (sentiment.toLowerCase()) {
    case 'positive':
      return 'text-green-600';
    case 'negative':
      return 'text-red-600';
    case 'neutral':
      return 'text-yellow-600';
    default:
      return 'text-gray-600';
  }
};

function extractVideoId(url: string): string | null {
  const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return m ? m[1] : null;
}

const YouTubeCommentSentimentAnalyzer: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [totals, setTotals] = useState<{positive: number, neutral: number, negative: number} | null>(null);
  const [videoInfo, setVideoInfo] = useState<{
    title: string, 
    channelName: string, 
    totalComments: number, 
    analyzedComments: number,
    sentimentScore: number,
    overallSentiment: string,
    percentages: {positive: string, neutral: string, negative: string},
    topKeywords: Array<{word: string, count: number}>,
    positiveExamples: string[],
    negativeExamples: string[],
    neutralExamples: string[],
    engagementMetrics: {
      avgCommentLength: number,
      longComments: number,
      shortComments: number,
      longCommentPercentage: string,
      shortCommentPercentage: string
    },
    analysisDetails: {
      totalAnalyzed: number,
      highConfidencePositive: number,
      highConfidenceNegative: number,
      lowConfidence: number
    },
    totals: {positive: number, neutral: number, negative: number},
    languageBreakdown: {english: number, hindi: number, bengali: number, assamese: number, other: number},
    emojiAnalysis: {
      totalEmojis: number,
      uniqueEmojis: number,
      topEmojis: Array<{emoji: string, count: number}>,
      emojiSentimentStats: Record<string, {
        total: number,
        positive: number,
        negative: number,
        neutral: number,
        dominant_sentiment: string
      }>
    },
    supportedLanguages: string[]
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setTotals(null);
    setVideoInfo(null);
    const videoId = extractVideoId(input);
    if (!videoId) {
      setError('Invalid YouTube video link.');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoId })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setTotals(data.totals);
      setVideoInfo({
        title: data.videoTitle,
        channelName: data.channelName,
        totalComments: data.totalComments,
        analyzedComments: data.count,
        sentimentScore: data.sentimentScore || 0,
        overallSentiment: data.overallSentiment || 'Neutral',
        percentages: data.percentages || {positive: '0', neutral: '0', negative: '0'},
        topKeywords: data.topKeywords || [],
        positiveExamples: data.positiveExamples || [],
        negativeExamples: data.negativeExamples || [],
        neutralExamples: data.neutralExamples || [],
        engagementMetrics: data.engagementMetrics || {
          avgCommentLength: 0,
          longComments: 0,
          shortComments: 0,
          longCommentPercentage: '0',
          shortCommentPercentage: '0'
        },
        analysisDetails: data.analysisDetails || {
          totalAnalyzed: 0,
          highConfidencePositive: 0,
          highConfidenceNegative: 0,
          lowConfidence: 0
        },
        totals: data.totals,
        languageBreakdown: data.languageBreakdown || {english: 0, hindi: 0, bengali: 0, assamese: 0, other: 0},
        emojiAnalysis: data.emojiAnalysis || {
          totalEmojis: 0,
          uniqueEmojis: 0,
          topEmojis: [],
          emojiSentimentStats: {}
        },
        supportedLanguages: data.supportedLanguages || ['English']
      });
    } catch (e: any) {
      setError(e.message || 'API error');
    }
    setLoading(false);
  };

  // Prepare data for bar chart
  const getSentimentBarData = () => {
    if (!totals) return [];
    return [
      { name: 'Positive', value: totals.positive, color: '#4caf50' },
      { name: 'Neutral', value: totals.neutral, color: '#ffca28' },
      { name: 'Negative', value: totals.negative, color: '#e53935' }
    ];
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <span role="img" aria-label="comment">💬</span> YouTube Comment Sentiment Analyzer
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Disclaimer: Due to limited server processing resources, only a random selection of top comments is analyzed. For videos with a large number of comments, the analysis may take additional time or may be based solely on a limited set of the most prominent comments.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          placeholder="Paste YouTube video or channel link..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
          onClick={handleAnalyze}
          disabled={loading || !input}
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
      
      {error && <div className="text-red-600 mb-4">{error}</div>}
      
      {videoInfo && (
        <div className="space-y-6">
          {/* Video Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📹 Video Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Title:</strong> {videoInfo.title}
              </div>
              <div>
                <strong>Channel:</strong> {videoInfo.channelName}
              </div>
              <div>
                <strong>Total Comments:</strong> {videoInfo.totalComments.toLocaleString()}
              </div>
              <div>
                <strong>Analyzed Comments:</strong> {videoInfo.analyzedComments.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Overall Sentiment */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">🎯 Overall Sentiment Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getSentimentColor(videoInfo.overallSentiment)}`}>{videoInfo.overallSentiment}</div>
                <div className="text-gray-600 text-sm">Overall Sentiment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{videoInfo.sentimentScore}</div>
                <div className="text-gray-600 text-sm">Sentiment Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {videoInfo.percentages.positive}%
                </div>
                <div className="text-gray-600 text-sm">Positive Ratio</div>
              </div>
            </div>
          </div>



          {/* Sentiment Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">📊 Sentiment Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={getSentimentBarData()}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8">
                    {getSentimentBarData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">📈 Sentiment Percentages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Positive
                  </span>
                  <span className="font-semibold">{videoInfo.percentages.positive}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    Neutral
                  </span>
                  <span className="font-semibold">{videoInfo.percentages.neutral}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    Negative
                  </span>
                  <span className="font-semibold">{videoInfo.percentages.negative}%</span>
                </div>
              </div>
            </div>
          </div>

                     {/* Analyzed Comments Examples */}
           <div>
             <h3 className="text-xl font-bold mb-4 text-gray-800">Some Comments Overview</h3>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Positive Comments */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-green-800">👍 Positive Comments</h3>
              <div className="space-y-3">
                {videoInfo.positiveExamples.slice(0, 5).map((comment, index) => (
                  <div key={index} className="bg-white p-3 rounded border-l-4 border-green-500 text-sm">
                    <p className="text-gray-700 line-clamp-3">{comment}</p>
                  </div>
                ))}
                {videoInfo.positiveExamples.length === 0 && (
                  <p className="text-gray-500 text-sm italic">No positive comments found</p>
                )}
              </div>
            </div>

            {/* Neutral Comments */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">😐 Neutral Comments</h3>
              <div className="space-y-3">
                {videoInfo.neutralExamples.slice(0, 5).map((comment, index) => (
                  <div key={index} className="bg-white p-3 rounded border-l-4 border-yellow-500 text-sm">
                    <p className="text-gray-700 line-clamp-3">{comment}</p>
                  </div>
                ))}
                {videoInfo.neutralExamples.length === 0 && (
                  <p className="text-gray-500 text-sm italic">No neutral comments found</p>
                )}
              </div>
            </div>

            {/* Negative Comments */}
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-red-800">👎 Negative Comments</h3>
              <div className="space-y-3">
                {videoInfo.negativeExamples.slice(0, 5).map((comment, index) => (
                  <div key={index} className="bg-white p-3 rounded border-l-4 border-red-500 text-sm">
                    <p className="text-gray-700 line-clamp-3">{comment}</p>
                  </div>
                ))}
                {videoInfo.negativeExamples.length === 0 && (
                  <p className="text-gray-500 text-sm italic">No negative comments found</p>
                )}
              </div>
            </div>
          </div>
        </div>

          {/* Enhanced Emoji Analysis */}
          {videoInfo.emojiAnalysis.totalEmojis > 0 && (
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">😊 Emoji Analysis</h3>
              
              {/* Most Used Emoji Highlight */}
              {videoInfo.emojiAnalysis.topEmojis.length > 0 && (
                <div className="bg-white p-4 rounded-lg mb-4 border-2 border-purple-200">
                  <h4 className="font-semibold mb-2 text-purple-800">🏆 Most Used Emoji</h4>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-6xl">{videoInfo.emojiAnalysis.topEmojis[0].emoji}</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {videoInfo.emojiAnalysis.topEmojis[0].count} times
                      </div>
                      <div className="text-sm text-gray-600">
                        {((videoInfo.emojiAnalysis.topEmojis[0].count / videoInfo.emojiAnalysis.totalEmojis) * 100).toFixed(1)}% of all emojis
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{videoInfo.emojiAnalysis.totalEmojis}</div>
                  <div className="text-gray-600">Total Emojis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{videoInfo.emojiAnalysis.uniqueEmojis}</div>
                  <div className="text-gray-600">Unique Emojis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {videoInfo.emojiAnalysis.topEmojis.length > 0 ? videoInfo.emojiAnalysis.topEmojis[0].emoji : '😊'}
                  </div>
                  <div className="text-gray-600">Most Used</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
                    {videoInfo.emojiAnalysis.topEmojis.length > 0 ? videoInfo.emojiAnalysis.topEmojis[0].count : 0}
                  </div>
                  <div className="text-gray-600">Usage Count</div>
                </div>
              </div>
              
              {videoInfo.emojiAnalysis.topEmojis.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3">📊 Top 15 Most Used Emojis:</h4>
                  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {videoInfo.emojiAnalysis.topEmojis.slice(0, 15).map((emojiData, index) => (
                      <div key={index} className={`flex flex-col items-center px-3 py-2 rounded-lg border shadow-sm ${
                        index === 0 ? 'bg-yellow-100 border-yellow-300' : 'bg-white'
                      }`}>
                        <span className="text-2xl mb-1">{emojiData.emoji}</span>
                        <span className="text-xs text-gray-600 font-medium">({emojiData.count})</span>
                        {index === 0 && (
                          <span className="text-xs text-yellow-700 font-bold mt-1">#1</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default YouTubeCommentSentimentAnalyzer; 