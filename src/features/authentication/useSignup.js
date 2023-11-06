import { useMutation } from '@tanstack/react-query';
import { signup as signupAPI } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useSignup() {
  // USER LEAVE APPLICATION (redirect to home)
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success('Welcome to worldhello!');
      navigate('/Signupcomplete', { replace: true });

      // AUTOMATICALLY LOGIN ACCOUNT
    },
  });

  return { signup, isLoading };
}
