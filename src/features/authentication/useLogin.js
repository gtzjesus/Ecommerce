import { useMutation } from '@tanstack/react-query';
import { login as loginAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useLogin() {
  // HANDLE LOGIN, USER GETS AUTH, MUTATION TO THE SERVER BACKEND
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success('Authenticated');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Incorrect information');
    },
  });

  return { login, isLoading };
}
