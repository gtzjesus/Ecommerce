import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://vyxhuyruxuknaagfcaqg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eGh1eXJ1eHVrbmFhZ2ZjYXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNzIxNjksImV4cCI6MjAxMDY0ODE2OX0.hSCov0nQK3ue_dIzoDrLYTE9P1jqXoH0VSqIkgXq7sE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
