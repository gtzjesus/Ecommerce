import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../../features/authentication/LoginForm';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-tile);
  height: var(--height-filled-window);
`;

const LoginContainer = styled.div`
  width: var(--width-full-window);
  background-color: var(--background-primary);
`;

const Navigation = styled.footer`
  width: var(--width-full-window);
  z-index: var(--z-second);
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  align-items: center;
  margin: var(--margin-large);
`;

const StyledList = styled.li`
  display: inline-block;
  margin: var(--margin-small);

  font-size: var(--font-large);
  color: var(--color-red);
  cursor: pointer;
`;

function Nav() {
  return (
    <NavContainer>
      <Navigation>
        <StyledUnorderedList>
          <StyledList>
            <Link to="/menu">menu</Link>
          </StyledList>
          <StyledList>
            <Link to="/featured">featured</Link>
          </StyledList>
          <StyledList>
            <Link to="/orders">orders</Link>
          </StyledList>
          <StyledList>
            <Link to="/faves">faves</Link>
          </StyledList>
        </StyledUnorderedList>
      </Navigation>
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </NavContainer>
  );
}

export default Nav;
