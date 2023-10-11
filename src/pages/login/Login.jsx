import styled from 'styled-components';
import LoginForm from '../../features/authentication/LoginForm';
const FullPage = styled.div`
  height: var(--height-full-window);
  background-color: var(--background--tile);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Login() {
  return (
    <FullPage>
      <LoginForm />
    </FullPage>
  );
}

export default Login;
