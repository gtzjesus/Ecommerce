import styled from 'styled-components';

import { CgClose } from 'react-icons/cg';

const StyledSidebar = styled.div`
  z-index: var(--z-second);
  background-color: var(--background-primary);
  height: var(--height-full-window);
  padding: var(--padding-header);
`;

const Nav = styled.div`
  display: flex;
  justify-content: right;
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-medium);
  color: var(--color-red);
  padding: var(--padding-header);
`;

function Sidebar({ isOpen, setIsOpen }) {
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
          <Hamburger onClick={() => handleToggle()}>
            <CgClose />
          </Hamburger>
        </Nav>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
