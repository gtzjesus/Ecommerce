import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: var(--width-full-window);
  background-color: #ebdac4;
  border-radius: var(--border-footer);

  z-index: var(--z-second);
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

function Footer({ isOpen, setIsOpen }) {
  // HANDLE CLOSE ON MENU CLICK MODAL
  function handleModal() {
    // IF NO isOpen VALUE IS PRESENT CLOSE MODAL
    if (isOpen === undefined) setIsOpen(true);
  }
  return (
    <StyledFooter>
      <StyledUnorderedList>
        <StyledList>
          <Link to="/menu" onClick={handleModal}>
            menu
          </Link>
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
    </StyledFooter>
  );
}

export default Footer;
