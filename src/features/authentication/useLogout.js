import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutAPI } from '../../services/apiAuth';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

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
      toast.success('see you soon');
    },
  });

  return { logout, isLoading };
}
