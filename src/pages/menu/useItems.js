import { useQuery } from 'react-query';
import { getItems } from '../../services/apiItems';

export function useItems() {
  const {
    isLoading,
    data: items,
    error,
  } = useQuery({
    queryKey: ['items'],
    queryFn: getItems,
  });
  console.log(items);

  return { isLoading, error, items };
}
