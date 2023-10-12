import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useLogin() {
  // NAVIGATION HOOK
  const navigate = useNavigate();
  // GRAB QUERY CLIENT
  const queryClient = useQueryClient();
  // HANDLE LOGIN, USER GETS AUTH, MUTATION TO THE SERVER BACKEND
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      // MANUALLY SET DATA INTO react query cache
      queryClient.setQueryData(['user'], user.user);
      // GRAB USER'S EMAIL
      const userEmail = user.user.email;
      // SPLIT INTO NAME AND DOMAIN SEPARATE
      const name = userEmail.substring(0, userEmail.lastIndexOf('@'));
      const domain = userEmail.substring(userEmail.lastIndexOf('@') + 1);
      toast.success(`hello ${name}`);
      navigate('/', { replace: true });
    },
    onError: () => {
      toast.error('Incorrect information');
    },
  });

  return { login, isLoading };
}
