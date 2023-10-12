import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router';

export function useLogout() {
  // USER LEAVE APPLICATION (redirect to home)
  const navigate = useNavigate();
  // REMOVE ALL QUERY CACHE
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutAPI,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/', { replace: true });
    },
  });

  return { logout, isLoading };
}
