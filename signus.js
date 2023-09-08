// Use ES6 module import syntax
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with your Supabase project URL and public API key
const supabase = createClient('https://sinwaxncwvyrsznnqotl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpbndheG5jd3Z5cnN6bm5xb3RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNTY0MzUsImV4cCI6MjAwOTczMjQzNX0.9Nm0gJDE7_sZQt_IvlGtaLRu8qdd9AtU_7oigJf-3WE');

// Rest of your code here