import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
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
  margin: var(--margin-medium);
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
          <Link to="/menu">menu</Link>
        </StyledList>
        <StyledList>
          <Link to="/faves">faves</Link>
        </StyledList>
        <StyledList>
          <Link to="/orders">orders</Link>
        </StyledList>
        <StyledList>
          <Link to="/rewards">rewards</Link>
        </StyledList>
      </StyledUnorderedList>
    </StyledFooter>
  );
}

export default Footer;
