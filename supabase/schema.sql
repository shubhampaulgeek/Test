-- Database schema for YouTube Comment Sentiment Analyzer with learning capabilities
-- Optimized for Supabase free plan (500MB storage) - 100 analyses/day usage

-- Analysis sessions table (minimal metadata storage)
CREATE TABLE IF NOT EXISTS analysis_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  video_id VARCHAR(11) NOT NULL,
  video_title TEXT NOT NULL,
  channel_name VARCHAR(100) NOT NULL,
  total_comments INTEGER NOT NULL DEFAULT 0,
  analyzed_comments INTEGER NOT NULL DEFAULT 0,
  positive_count INTEGER NOT NULL DEFAULT 0,
  neutral_count INTEGER NOT NULL DEFAULT 0,
  negative_count INTEGER NOT NULL DEFAULT 0,
  language_breakdown JSONB,
  sentiment_score FLOAT,
  overall_sentiment VARCHAR(20),
  spam_percentage FLOAT DEFAULT 0,
  emoji_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User feedback table (for learning improvements)
CREATE TABLE IF NOT EXISTS user_feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  analysis_id UUID REFERENCES analysis_sessions(id) ON DELETE CASCADE,
  comment_text TEXT NOT NULL,
  original_sentiment VARCHAR(10) NOT NULL,
  corrected_sentiment VARCHAR(10) NOT NULL,
  user_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Learning model updates table (for tracking improvements)
CREATE TABLE IF NOT EXISTS learning_model_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  update_type VARCHAR(50) NOT NULL, -- 'word_addition', 'word_removal', 'confidence_update'
  language VARCHAR(20) NOT NULL,
  sentiment_type VARCHAR(10) NOT NULL, -- 'positive', 'negative'
  word TEXT NOT NULL,
  confidence_score FLOAT,
  feedback_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics table (for tracking usage and performance)
CREATE TABLE IF NOT EXISTS analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name VARCHAR(50) NOT NULL,
  metric_value FLOAT NOT NULL,
  metric_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_analysis_video_id ON analysis_sessions(video_id);
CREATE INDEX IF NOT EXISTS idx_analysis_created_at ON analysis_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_analysis_sentiment ON analysis_sessions(overall_sentiment);

CREATE INDEX IF NOT EXISTS idx_feedback_analysis_id ON user_feedback(analysis_id);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON user_feedback(created_at);
CREATE INDEX IF NOT EXISTS idx_feedback_sentiment_diff ON user_feedback(original_sentiment, corrected_sentiment);

CREATE INDEX IF NOT EXISTS idx_model_updates_type ON learning_model_updates(update_type);
CREATE INDEX IF NOT EXISTS idx_model_updates_language ON learning_model_updates(language);
CREATE INDEX IF NOT EXISTS idx_model_updates_created_at ON learning_model_updates(created_at);

CREATE INDEX IF NOT EXISTS idx_analytics_metric ON analytics(metric_name);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at);

-- Row Level Security (RLS) policies
ALTER TABLE analysis_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_model_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Allow all operations for now (can be restricted later)
CREATE POLICY "Allow all operations on analysis_sessions" ON analysis_sessions
  FOR ALL USING (true);

CREATE POLICY "Allow all operations on user_feedback" ON user_feedback
  FOR ALL USING (true);

CREATE POLICY "Allow all operations on learning_model_updates" ON learning_model_updates
  FOR ALL USING (true);

CREATE POLICY "Allow all operations on analytics" ON analytics
  FOR ALL USING (true);

-- Functions for data cleanup (optimized for 100 analyses/day - 1-year retention)
CREATE OR REPLACE FUNCTION cleanup_old_data()
RETURNS void AS $$
BEGIN
  -- Delete analysis sessions older than 1 year (optimized for 100 analyses/day)
  DELETE FROM analysis_sessions 
  WHERE created_at < NOW() - INTERVAL '1 year';
  
  -- Delete user feedback older than 1 year
  DELETE FROM user_feedback 
  WHERE created_at < NOW() - INTERVAL '1 year';
  
  -- Delete learning model updates older than 2 years (keep longer for model improvements)
  DELETE FROM learning_model_updates 
  WHERE created_at < NOW() - INTERVAL '2 years';
  
  -- Delete analytics older than 6 months (keep recent performance data)
  DELETE FROM analytics 
  WHERE created_at < NOW() - INTERVAL '6 months';
END;
$$ LANGUAGE plpgsql;

-- Function to get storage usage statistics
CREATE OR REPLACE FUNCTION get_storage_stats()
RETURNS TABLE (
  table_name TEXT,
  row_count BIGINT,
  size_bytes BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    'analysis_sessions'::TEXT as table_name,
    COUNT(*) as row_count,
    pg_total_relation_size('analysis_sessions') as size_bytes
  FROM analysis_sessions
  UNION ALL
  SELECT 
    'user_feedback'::TEXT as table_name,
    COUNT(*) as row_count,
    pg_total_relation_size('user_feedback') as size_bytes
  FROM user_feedback
  UNION ALL
  SELECT 
    'learning_model_updates'::TEXT as table_name,
    COUNT(*) as row_count,
    pg_total_relation_size('learning_model_updates') as size_bytes
  FROM learning_model_updates
  UNION ALL
  SELECT 
    'analytics'::TEXT as table_name,
    COUNT(*) as row_count,
    pg_total_relation_size('analytics') as size_bytes
  FROM analytics;
END;
$$ LANGUAGE plpgsql;

-- Function to get learning insights (optimized for 1-year retention)
CREATE OR REPLACE FUNCTION get_learning_insights()
RETURNS TABLE (
  total_analyses BIGINT,
  total_feedback BIGINT,
  avg_sentiment_score FLOAT,
  most_common_language TEXT,
  feedback_accuracy FLOAT,
  retention_period TEXT
) AS $$
DECLARE
  total_analyses_count BIGINT;
  total_feedback_count BIGINT;
  avg_score FLOAT;
  common_lang TEXT;
  accuracy FLOAT;
BEGIN
  -- Get total analyses in last 30 days
  SELECT COUNT(*) INTO total_analyses_count
  FROM analysis_sessions
  WHERE created_at >= NOW() - INTERVAL '30 days';
  
  -- Get total feedback in last 30 days
  SELECT COUNT(*) INTO total_feedback_count
  FROM user_feedback
  WHERE created_at >= NOW() - INTERVAL '30 days';
  
  -- Get average sentiment score
  SELECT AVG(sentiment_score) INTO avg_score
  FROM analysis_sessions
  WHERE created_at >= NOW() - INTERVAL '30 days';
  
  -- Get most common language
  SELECT language INTO common_lang
  FROM (
    SELECT 
      jsonb_object_keys(language_breakdown) as language,
      SUM((language_breakdown->jsonb_object_keys(language_breakdown))::INTEGER) as count
    FROM analysis_sessions
    WHERE created_at >= NOW() - INTERVAL '30 days'
    GROUP BY jsonb_object_keys(language_breakdown)
    ORDER BY count DESC
    LIMIT 1
  ) lang_stats;
  
  -- Get feedback accuracy (percentage of corrections)
  SELECT 
    CASE 
      WHEN COUNT(*) > 0 THEN 
        (COUNT(*) FILTER (WHERE original_sentiment != corrected_sentiment)::FLOAT / COUNT(*)::FLOAT) * 100
      ELSE 0 
    END INTO accuracy
  FROM user_feedback
  WHERE created_at >= NOW() - INTERVAL '30 days';
  
  RETURN QUERY SELECT 
    total_analyses_count,
    total_feedback_count,
    avg_score,
    common_lang,
    accuracy,
    '1 year'::TEXT as retention_period;
END;
$$ LANGUAGE plpgsql;

-- Function to get storage projections for 100 analyses/day
CREATE OR REPLACE FUNCTION get_storage_projections()
RETURNS TABLE (
  period TEXT,
  analyses_count BIGINT,
  storage_mb FLOAT,
  free_plan_percentage FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    'Daily (100 analyses)'::TEXT as period,
    100::BIGINT as analyses_count,
    0.0288::FLOAT as storage_mb,
    0.0058::FLOAT as free_plan_percentage
  UNION ALL
  SELECT 
    'Monthly'::TEXT as period,
    3000::BIGINT as analyses_count,
    0.864::FLOAT as storage_mb,
    0.17::FLOAT as free_plan_percentage
  UNION ALL
  SELECT 
    'Yearly'::TEXT as period,
    36500::BIGINT as analyses_count,
    10.37::FLOAT as storage_mb,
    2.07::FLOAT as free_plan_percentage
  UNION ALL
  SELECT 
    '1-Year Retention'::TEXT as period,
    36500::BIGINT as analyses_count,
    10.37::FLOAT as storage_mb,
    2.07::FLOAT as free_plan_percentage;
END;
$$ LANGUAGE plpgsql;

-- Insert initial analytics record with proper JSONB casting
INSERT INTO analytics (metric_name, metric_value, metric_data) 
VALUES ('storage_initialized', 1, jsonb_build_object('timestamp', NOW()::TEXT, 'retention_period', '1 year', 'usage_optimized_for', '100 analyses/day'))
ON CONFLICT DO NOTHING; 