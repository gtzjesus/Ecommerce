import styled from 'styled-components';

const StyledSidebar = styled.div`
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ede1d1;
`;

const Hamburger = styled.button`
  padding: 2rem;
  border: none;
  background: none;
  cursor: pointer;
`;

const Nav = styled.div`
  z-index: 9998;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ede1d1;
  display: flex;
  gap: 5rem;
`;

function Sidebar({ isOpen, setIsOpen }) {
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);

    // TOGGLE CLICK TO SET FALSE WINDOW
  }

  return (
    <>
      <Nav>
        <Hamburger onClick={() => handleToggle()}>
          <img src="/hamburger/hamburger-close.png" />
        </Hamburger>
      </Nav>
      <StyledSidebar></StyledSidebar>
    </>
  );
}

export default Sidebar;
