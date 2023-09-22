import supabase from './supabase';

export async function getItems() {
  const { data: items, error } = await supabase.from('items').select('*');
  if (error) throw new Error('Items could not be loaded');
  return items;
}

export async function getFaves() {
  const { data: faves, error } = await supabase
    .from('items')
    .is('faves', 'yes');
  if (error) throw new Error('Faves could not be loaded');
  console.log(faves);
  return faves;
}
