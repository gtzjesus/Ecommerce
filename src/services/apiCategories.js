import supabase from './supabase';

export async function getCategories() {
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*');
  if (error) {
    console.log(error);
    throw new Error('Error loading categories');
  }

  return categories;
}
