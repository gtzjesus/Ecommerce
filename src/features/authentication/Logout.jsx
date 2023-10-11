import Button from '../../ui/buttons/Button';
import SpinnerMini from '../../ui/spinners/SpinnerMini';
import { useLogout } from './useLogout';

function Logout() {
  // GRAB LOGOUT custom hook
  const { logout, isLoading } = useLogout();
  return (
    <Button disabled={isLoading} onClick={logout}>
      {!isLoading ? 'logout' : <SpinnerMini />}
    </Button>
  );
}

export default Logout;
