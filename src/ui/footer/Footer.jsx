import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-family: 'Bebas Neue', sans-serif;
  position: fixed;
  left: 0;
  bottom: 0;
  width: var(--width-full-window);
  background-color: var(--background-primary);
  border-radius: var(--border-footer);
  box-shadow: var(--shadow-container);
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  align-items: center;
  margin: 2rem;
`;

const StyledList = styled.li`
  display: inline-block;
  font-size: var(--font-small);

  color: var(--color-red);
  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledUnorderedList>
        <StyledList>
          <Link style={{ textDecoration: 'none' }} to="/menu">
            menu
          </Link>
        </StyledList>
        <StyledList>
          <Link style={{ textDecoration: 'none' }} to="/favorites">
            faves
          </Link>
        </StyledList>
        <StyledList>
          <Link style={{ textDecoration: 'none' }} to="/orders">
            orders
          </Link>
        </StyledList>
      </StyledUnorderedList>
    </StyledFooter>
  );
}

export default Footer;
