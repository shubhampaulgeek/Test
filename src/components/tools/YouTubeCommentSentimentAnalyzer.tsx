import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const API_URL = '/api/analyze';
const COLORS = ['#4caf50', '#ffca28', '#e53935'];

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
    totals: {positive: number, neutral: number, negative: number}
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
        sentimentScore: data.sentimentScore,
        overallSentiment: data.overallSentiment,
        percentages: data.percentages,
        topKeywords: data.topKeywords,
        positiveExamples: data.positiveExamples,
        negativeExamples: data.negativeExamples,
        neutralExamples: data.neutralExamples,
        engagementMetrics: data.engagementMetrics,
        analysisDetails: data.analysisDetails,
        totals: data.totals
      });
    } catch (e: any) {
      setError(e.message || 'API error');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <span role="img" aria-label="comment">💬</span> YouTube Comment Sentiment Analyzer
      </h2>
      <p className="text-sm text-red-600 mb-4">
        * Note: Videos with high number of comments might require extra time for analysis and output results due to the increased data volume.
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
        <div className="mt-6 space-y-6">
          {/* Video Information */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Video Information</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Title:</span> {videoInfo.title}</div>
              <div><span className="font-medium">Channel:</span> {videoInfo.channelName}</div>
              <div><span className="font-medium">Total Comments:</span> {videoInfo.totalComments.toLocaleString()}</div>
              <div><span className="font-medium">Analyzed Comments:</span> {videoInfo.analyzedComments.toLocaleString()}</div>
            </div>
          </div>

          {/* Overall Sentiment Score */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Overall Sentiment Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{videoInfo.sentimentScore}%</div>
                <div className="text-sm text-gray-600">Sentiment Score</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${
                  videoInfo.overallSentiment === 'Positive' ? 'text-green-600' : 
                  videoInfo.overallSentiment === 'Negative' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                  {videoInfo.overallSentiment}
                </div>
                <div className="text-sm text-gray-600">Overall Sentiment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{videoInfo.analysisDetails.totalAnalyzed}</div>
                <div className="text-sm text-gray-600">Comments Analyzed</div>
              </div>
            </div>
          </div>

          {/* Sentiment Percentages */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Sentiment Distribution</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{videoInfo.percentages.positive}%</div>
                <div className="text-sm text-gray-600">Positive</div>
                <div className="text-xs text-gray-500">({videoInfo.totals.positive} comments)</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{videoInfo.percentages.neutral}%</div>
                <div className="text-sm text-gray-600">Neutral</div>
                <div className="text-xs text-gray-500">({videoInfo.totals.neutral} comments)</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{videoInfo.percentages.negative}%</div>
                <div className="text-sm text-gray-600">Negative</div>
                <div className="text-xs text-gray-500">({videoInfo.totals.negative} comments)</div>
              </div>
            </div>
          </div>

          {/* Top Keywords */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Top Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {videoInfo.topKeywords.map((keyword, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {keyword.word} ({keyword.count})
                </span>
              ))}
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Engagement Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-gray-600">Average Comment Length</div>
                <div className="text-xl font-bold">{videoInfo.engagementMetrics.avgCommentLength} characters</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Long Comments (&gt;100 chars)</div>
                <div className="text-xl font-bold">{videoInfo.engagementMetrics.longComments} ({videoInfo.engagementMetrics.longCommentPercentage}%)</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Short Comments (&lt;20 chars)</div>
                <div className="text-xl font-bold">{videoInfo.engagementMetrics.shortComments} ({videoInfo.engagementMetrics.shortCommentPercentage}%)</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Analysis Confidence</div>
                <div className="text-xl font-bold">
                  {videoInfo.analysisDetails.highConfidencePositive + videoInfo.analysisDetails.highConfidenceNegative} high confidence
                </div>
              </div>
            </div>
          </div>

          {/* Example Comments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Positive Examples */}
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Positive Comments</h4>
              <div className="space-y-2">
                {videoInfo.positiveExamples.map((comment, index) => (
                  <div key={index} className="text-sm text-green-700 bg-white p-2 rounded border-l-4 border-green-400">
                    "{comment.length > 100 ? comment.substring(0, 100) + '...' : comment}"
                  </div>
                ))}
              </div>
            </div>

            {/* Neutral Examples */}
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Neutral Comments</h4>
              <div className="space-y-2">
                {videoInfo.neutralExamples.map((comment, index) => (
                  <div key={index} className="text-sm text-yellow-700 bg-white p-2 rounded border-l-4 border-yellow-400">
                    "{comment.length > 100 ? comment.substring(0, 100) + '...' : comment}"
                  </div>
                ))}
              </div>
            </div>

            {/* Negative Examples */}
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Negative Comments</h4>
              <div className="space-y-2">
                {videoInfo.negativeExamples.map((comment, index) => (
                  <div key={index} className="text-sm text-red-700 bg-white p-2 rounded border-l-4 border-red-400">
                    "{comment.length > 100 ? comment.substring(0, 100) + '...' : comment}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {totals && (
        <div className="mt-6">
          <div className="mb-4 text-center font-semibold">Sentiment Distribution</div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Positive', value: totals.positive },
                  { name: 'Neutral', value: totals.neutral },
                  { name: 'Negative', value: totals.negative }
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {COLORS.map((color, idx) => (
                  <Cell key={idx} fill={color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default YouTubeCommentSentimentAnalyzer; 