import supabase from './supabase';

export async function getItems() {
  const { data: items, error } = await supabase.from('items').select('*');
  if (error) throw new Error('Items could not be loaded');
  return items;
}
