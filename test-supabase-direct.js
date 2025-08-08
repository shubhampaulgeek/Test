import { createClient } from '@supabase/supabase-js';

// Supabase client with the same credentials
const supabaseUrl = 'https://vrcktbxqzvpsjazunybd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyY2t0YnhxenZwc2phenVueWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODc0NDQsImV4cCI6MjA3MDA2MzQ0NH0.4lR0Bi-G0GuBJ3lGf6wAujvjz_qrIm0mMbAAgYjOjzI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabaseConnection() {
  console.log('🧪 Testing Supabase Connection...');
  console.log('URL:', supabaseUrl);
  console.log('Key length:', supabaseKey.length);
  console.log('');

  try {
    // Test 1: Check if table exists
    console.log('Test 1: Checking if youtube_analysis_history table exists...');
    const { data: tableCheck, error: tableError } = await supabase
      .from('youtube_analysis_history')
      .select('id')
      .limit(1);

    if (tableError) {
      console.log('❌ Table check failed:', tableError.message);
      console.log('💡 Suggestion: Create the youtube_analysis_history table in Supabase');
      console.log('');
      console.log('SQL to create table:');
      console.log(`
CREATE TABLE youtube_analysis_history (
  id BIGSERIAL PRIMARY KEY,
  video_id TEXT NOT NULL,
  compressed_data TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_youtube_analysis_video_id ON youtube_analysis_history(video_id);
CREATE INDEX idx_youtube_analysis_created_at ON youtube_analysis_history(created_at);
      `);
      return;
    }

    console.log('✅ Table exists and is accessible');
    console.log('');

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
      console.log('❌ Insert failed:', insertError.message);
      console.log('💡 Suggestion: Check table permissions and RLS policies');
      return;
    }

    console.log('✅ Insert successful');
    console.log('');

    // Test 3: Try to read the test record
    console.log('Test 3: Testing read capability...');
    const { data: readData, error: readError } = await supabase
      .from('youtube_analysis_history')
      .select('*')
      .eq('video_id', 'test-video-123')
      .limit(1);

    if (readError) {
      console.log('❌ Read failed:', readError.message);
      return;
    }

    console.log('✅ Read successful');
    console.log('');

    // Test 4: Clean up test data
    console.log('Test 4: Cleaning up test data...');
    const { error: deleteError } = await supabase
      .from('youtube_analysis_history')
      .delete()
      .eq('video_id', 'test-video-123');

    if (deleteError) {
      console.log('❌ Delete failed:', deleteError.message);
      return;
    }

    console.log('✅ Delete successful');
    console.log('');

    // Test 5: Check current record count
    console.log('Test 5: Checking current record count...');
    const { count, error: countError } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log('❌ Count failed:', countError.message);
      return;
    }

    console.log('✅ Count successful');
    console.log('');

    console.log('🎉 All Supabase tests passed!');
    console.log('📊 Current record count:', count);
    console.log('🔗 Connection details:');
    console.log('   - URL:', supabaseUrl);
    console.log('   - Key length:', supabaseKey.length);
    console.log('');
    console.log('✅ Your Supabase connection is working perfectly!');
    console.log('✅ The learning feature should work correctly.');

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Run the test
testSupabaseConnection();
