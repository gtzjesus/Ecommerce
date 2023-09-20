import { useQuery } from '@tanstack/react-query';
import { getCategories, getCategoryName } from '../../services/apiCategories';

export default function useCategories() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { isLoading, categories, error };
}

export function useCategoryName() {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryKey: ['name'],
    queryFn: getCategoryName,
  });
  console.log(categories);

  return { isLoading, categories, error };
}
