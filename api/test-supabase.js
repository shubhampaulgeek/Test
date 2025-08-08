import { createClient } from '@supabase/supabase-js';

// Supabase client with the same credentials
const supabaseUrl = process.env.SUPABASE_URL || 'https://vrcktbxqzvpsjazunybd.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyY2t0YnhxenZwc2phenVueWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODc0NDQsImV4cCI6MjA3MDA2MzQ0NH0.4lR0Bi-G0GuBJ3lGf6wAujvjz_qrIm0mMbAAgYjOjzI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    console.log('Testing Supabase connection...');
    console.log('URL:', supabaseUrl);
    console.log('Key length:', supabaseKey.length);

    // Test 1: Check if table exists
    console.log('Test 1: Checking if youtube_analysis_history table exists...');
    const { data: tableCheck, error: tableError } = await supabase
      .from('youtube_analysis_history')
      .select('id')
      .limit(1);

    if (tableError) {
      console.log('Table check error:', tableError);
      return res.status(200).json({
        success: false,
        error: 'Table not found or access denied',
        details: tableError.message,
        suggestion: 'Please create the youtube_analysis_history table in Supabase'
      });
    }

    console.log('✅ Table exists and is accessible');

    // Test 2: Try to insert a test record
    console.log('Test 2: Testing insert capability...');
    const testData = {
      video_id: 'test-video-123',
      compressed_data: JSON.stringify({
        v: 'test-video-123',
        t: 'Test Video',
        c: 'Test Channel',
        tc: 100,
        ac: 50,
        s: 75,
        os: 'Positive',
        p: { positive: '60%', neutral: '30%', negative: '10%' },
        l: { english: 50 },
        sa: { sp: 5, dc: 2, rp: 1, msw: [] },
        ea: { te: 10, ue: 5, top: [] },
        ts: Date.now()
      }),
      created_at: new Date().toISOString()
    };

    const { data: insertData, error: insertError } = await supabase
      .from('youtube_analysis_history')
      .insert(testData)
      .select();

    if (insertError) {
      console.log('Insert error:', insertError);
      return res.status(200).json({
        success: false,
        error: 'Insert failed',
        details: insertError.message,
        suggestion: 'Check table permissions and RLS policies'
      });
    }

    console.log('✅ Insert successful');

    // Test 3: Try to read the test record
    console.log('Test 3: Testing read capability...');
    const { data: readData, error: readError } = await supabase
      .from('youtube_analysis_history')
      .select('*')
      .eq('video_id', 'test-video-123')
      .limit(1);

    if (readError) {
      console.log('Read error:', readError);
      return res.status(200).json({
        success: false,
        error: 'Read failed',
        details: readError.message
      });
    }

    console.log('✅ Read successful');

    // Test 4: Clean up test data
    console.log('Test 4: Cleaning up test data...');
    const { error: deleteError } = await supabase
      .from('youtube_analysis_history')
      .delete()
      .eq('video_id', 'test-video-123');

    if (deleteError) {
      console.log('Delete error:', deleteError);
      return res.status(200).json({
        success: false,
        error: 'Delete failed',
        details: deleteError.message
      });
    }

    console.log('✅ Delete successful');

    // Test 5: Check current record count
    console.log('Test 5: Checking current record count...');
    const { count, error: countError } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log('Count error:', countError);
      return res.status(200).json({
        success: false,
        error: 'Count failed',
        details: countError.message
      });
    }

    console.log('✅ Count successful');

    return res.status(200).json({
      success: true,
      message: 'All Supabase tests passed!',
      tests: {
        tableExists: true,
        insertWorks: true,
        readWorks: true,
        deleteWorks: true,
        countWorks: true
      },
      currentRecordCount: count,
      connection: {
        url: supabaseUrl,
        keyLength: supabaseKey.length
      }
    });

  } catch (error) {
    console.error('Test failed with error:', error);
    return res.status(500).json({
      success: false,
      error: 'Test failed',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
