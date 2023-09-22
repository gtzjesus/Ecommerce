import { useQuery } from '@tanstack/react-query';

export function useFaves() {
  const {
    data: faves,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['items'],
    queryFn: useFaves,
  });
  console.log(faves);
  return { faves, isLoading, error };
}
