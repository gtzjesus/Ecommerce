import supabase from './supabase';

export async function getItems() {
  const { data: items, error } = await supabase.from('items').select('*');
  if (error) throw new Error('Items could not be loaded');
  return items;
}

export async function updateHeart() {
  const { data, error } = await supabase
    .from('items')
    .upsert({ faves: 'yes' })
    .select();
  if (error) throw new Error('Could not update row');
  console.log(error);
  return data;
}
