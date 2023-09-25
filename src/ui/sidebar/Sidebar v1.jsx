import styled from 'styled-components';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import Bag from '../bag/Bag';

const StyledSidebar = styled.div`
  z-index: var(--z-second);
  background-color: var(--background-primary);
  height: var(--height-full-window);
  padding: var(--padding-medium) var(--padding-small);
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-medium);
  color: var(--color-red);
`;

function Sidebar({ isOpen, setIsOpen, navTo, setNavTo }) {
  console.log(navTo);
  // HANDLE TOGGLE ON CLICK
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);
  }

  // RETURN THE COMPONENT
  return (
    <>
      <StyledSidebar>
        <Nav>
          <Hamburger value={isOpen} onClick={() => handleToggle()}>
            <RiShoppingBag2Fill />
          </Hamburger>
          <Hamburger onClick={() => handleToggle()}>
            <CgClose />
          </Hamburger>
        </Nav>
        <Bag />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
