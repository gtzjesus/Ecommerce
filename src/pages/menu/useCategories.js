import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/apiCategories';

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
