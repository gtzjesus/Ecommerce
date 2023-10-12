import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import SpinnerMini from '../../ui/spinners/SpinnerMini';
import { useLogout } from './useLogout';

const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--width-full-window);
  padding: var(--padding-xsmall);
  gap: var(--gap-medium);
`;

const Greeting = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-small);
  color: var(--color-black);
  font-size: var(--font-medium);
  padding: var(--padding-medium);
`;

function Logout() {
  // GRAB LOGOUT custom hook
  const { logout, isLoading } = useLogout();
  return (
    <FullPage>
      <Greeting>Come back soon</Greeting>
      <Button disabled={isLoading} onClick={logout}>
        {!isLoading ? 'logout' : <SpinnerMini />}
      </Button>
    </FullPage>
  );
}

export default Logout;
