// Query Supabase to list distinct languages analyzed so far
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://vrcktbxqzvpsjazunybd.supabase.co'
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyY2t0YnhxenZwc2phenVueWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODc0NDQsImV4cCI6MjA3MDA2MzQ0NH0.4lR0Bi-G0GuBJ3lGf6wAujvjz_qrIm0mMbAAgYjOjzI'
const supabase = createClient(supabaseUrl, supabaseKey)

function aggregateLanguages(rows) {
  const languageCounts = new Map()

  for (const row of rows) {
    if (!row?.compressed_data) continue
    try {
      const data = JSON.parse(row.compressed_data)
      const breakdown = data?.l || data?.languageBreakdown
      if (!breakdown || typeof breakdown !== 'object') continue
      for (const [language, count] of Object.entries(breakdown)) {
        const key = String(language).toLowerCase()
        const prev = languageCounts.get(key) || 0
        languageCounts.set(key, prev + Number(count || 0))
      }
    } catch (e) {
      // ignore malformed rows
    }
  }

  // Sort by count desc
  const sorted = [...languageCounts.entries()].sort((a, b) => b[1] - a[1])
  return sorted
}

async function main() {
  console.log('[languages] starting query...')
  const { data: allRows, error: allErr } = await supabase
    .from('youtube_analysis_history')
    .select('compressed_data, created_at')

  if (allErr) {
    console.error('Supabase query error:', allErr)
    process.exit(1)
  }

  console.log(`[languages] all-time rows fetched: ${allRows?.length || 0}`)
  const allSorted = aggregateLanguages(allRows || [])

  console.log('All-time distinct languages analyzed:', allSorted.map(([l]) => l))
  console.log('All-time counts:')
  for (const [lang, count] of allSorted) {
    console.log(`- ${lang}: ${count}`)
  }

  // Last 30 days (matches Tool Insights period)
  const thirtyDaysAgoIso = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()
  const { data: last30, error: lastErr } = await supabase
    .from('youtube_analysis_history')
    .select('compressed_data, created_at')
    .gte('created_at', thirtyDaysAgoIso)

  if (lastErr) {
    console.error('Supabase 30d query error:', lastErr)
    process.exit(1)
  }

  const lastSorted = aggregateLanguages(last30 || [])
  console.log('Last 30 days distinct languages:', lastSorted.map(([l]) => l))
  console.log('Last 30 days counts:')
  for (const [lang, count] of lastSorted) {
    console.log(`- ${lang}: ${count}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})


