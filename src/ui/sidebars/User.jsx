import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background-primary);
  height: var(--height-filled-window);
`;

const Land = styled.div`
  align-items: center;
  font-size: var(--font-medium);
`;

function User() {
  return (
    <LoginContainer>
      <Land>No user here.</Land>
    </LoginContainer>
  );
}

export default User;
