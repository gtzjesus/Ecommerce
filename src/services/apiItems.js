import supabase from './supabase';

export async function getItems() {
  const { data: items, error } = await supabase.from('items').select('*');
  if (error) throw new Error('Items could not be loaded');
  return items;
}

export async function updateFaves(pathname, string) {
  const { data, error } = await supabase
    .from('items')
    .update({ faves: string })
    .eq('id', pathname);
  if (error) throw new Error('Could not update row');
  return data;
}
