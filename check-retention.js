import { createClient } from '@supabase/supabase-js';

// Supabase client with the same credentials
const supabaseUrl = 'https://vrcktbxqzvpsjazunybd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyY2t0YnhxenZwc2phenVueWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODc0NDQsImV4cCI6MjA3MDA2MzQ0NH0.4lR0Bi-G0GuBJ3lGf6wAujvjz_qrIm0mMbAAgYjOjzI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkRetentionSettings() {
  console.log('🔍 Checking Supabase Retention Settings...');
  console.log('');

  try {
    // Check total record count
    console.log('📊 Total Records:');
    const { count: totalCount, error: countError } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.log('❌ Error getting count:', countError.message);
      return;
    }

    console.log(`   Total records: ${totalCount}`);
    console.log('');

    // Check records by date ranges
    console.log('📅 Records by Date Range:');
    
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - (1 * 24 * 60 * 60 * 1000));
    const oneWeekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    const oneMonthAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
    const oneYearAgo = new Date(now.getTime() - (365 * 24 * 60 * 60 * 1000));

    // Last 24 hours
    const { count: last24h } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', oneDayAgo.toISOString());

    // Last week
    const { count: lastWeek } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', oneWeekAgo.toISOString());

    // Last month
    const { count: lastMonth } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', oneMonthAgo.toISOString());

    // Older than 1 year (should be 0 if retention is working)
    const { count: olderThanYear } = await supabase
      .from('youtube_analysis_history')
      .select('*', { count: 'exact', head: true })
      .lt('created_at', oneYearAgo.toISOString());

    console.log(`   Last 24 hours: ${last24h} records`);
    console.log(`   Last week: ${lastWeek} records`);
    console.log(`   Last month: ${lastMonth} records`);
    console.log(`   Older than 1 year: ${olderThanYear} records (should be 0)`);
    console.log('');

    // Check oldest and newest records
    console.log('📅 Record Age Analysis:');
    
    const { data: oldestRecord } = await supabase
      .from('youtube_analysis_history')
      .select('created_at, video_id')
      .order('created_at', { ascending: true })
      .limit(1);

    const { data: newestRecord } = await supabase
      .from('youtube_analysis_history')
      .select('created_at, video_id')
      .order('created_at', { ascending: false })
      .limit(1);

    if (oldestRecord && oldestRecord.length > 0) {
      const oldestDate = new Date(oldestRecord[0].created_at);
      const daysOld = Math.floor((now - oldestDate) / (1000 * 60 * 60 * 24));
      console.log(`   Oldest record: ${oldestDate.toISOString()} (${daysOld} days old)`);
      console.log(`   Oldest video_id: ${oldestRecord[0].video_id}`);
    }

    if (newestRecord && newestRecord.length > 0) {
      const newestDate = new Date(newestRecord[0].created_at);
      const daysNew = Math.floor((now - newestDate) / (1000 * 60 * 60 * 24));
      console.log(`   Newest record: ${newestDate.toISOString()} (${daysNew} days old)`);
      console.log(`   Newest video_id: ${newestRecord[0].video_id}`);
    }
    console.log('');

    // Check storage usage estimation
    console.log('💾 Storage Usage Estimation:');
    const avgRecordSize = 2048; // ~2KB per compressed record
    const estimatedSizeKB = totalCount * avgRecordSize;
    const estimatedSizeMB = estimatedSizeKB / 1024;
    const estimatedSizeGB = estimatedSizeMB / 1024;
    
    console.log(`   Estimated storage: ${estimatedSizeMB.toFixed(2)} MB (${estimatedSizeGB.toFixed(4)} GB)`);
    console.log(`   Storage limit: 500 MB`);
    console.log(`   Usage percentage: ${((estimatedSizeMB / 500) * 100).toFixed(2)}%`);
    console.log('');

    // Retention policy check
    console.log('🔄 Retention Policy Status:');
    if (olderThanYear > 0) {
      console.log('   ⚠️  WARNING: Found records older than 1 year');
      console.log('   💡 Retention cleanup may not be working properly');
    } else {
      console.log('   ✅ Retention policy working correctly');
      console.log('   ✅ No records older than 1 year found');
    }
    console.log('');

    // Recommendations
    console.log('💡 Recommendations:');
    if (totalCount > 40000) {
      console.log('   ⚠️  High record count - consider reducing retention period');
    } else if (estimatedSizeMB > 400) {
      console.log('   ⚠️  High storage usage - consider more aggressive compression');
    } else {
      console.log('   ✅ Storage usage is within safe limits');
    }

    if (last24h > 100) {
      console.log('   ⚠️  High daily usage - monitor for storage growth');
    } else {
      console.log('   ✅ Daily usage is reasonable');
    }

    console.log('');
    console.log('✅ Retention check completed!');

  } catch (error) {
    console.error('❌ Error checking retention:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Run the check
checkRetentionSettings();
