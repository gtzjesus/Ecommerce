import styled from 'styled-components';
import SignupForm from '../../features/authentication/SignupForm';

const FullPage = styled.div`
  height: var(--height-full-window);
  background-color: var(--background--tile);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Signup() {
  return (
    <FullPage>
      <SignupForm />
    </FullPage>
  );
}

export default Signup;
