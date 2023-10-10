import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.SUPABASE_API
// const supabaseUrlKey = process.env.SUPABASE_KEY
// Create a single supabase client for interacting with your database
const supabase = createClient(
  'https://kibrldzieerdypcmqlqc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpYnJsZHppZWVyZHlwY21xbHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMTQzMzIsImV4cCI6MjAxMTg5MDMzMn0.JmQvp5_of_nIooAS_8UFfRKAgHUK3JAmHEPqYhgiU6g'
)
// const supabase = createClient(supabaseUrl, supabaseUrlKey)
export default supabase
