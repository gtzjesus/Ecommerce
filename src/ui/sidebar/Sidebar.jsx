import styled from 'styled-components';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import Bag from '../bag/Bag';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router';

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

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background-primary);
  height: var(--height-full-window);
`;

const Land = styled.div`
  align-items: center;
  font-size: var(--font-medium);
`;

const Img = styled.img`
  width: var(--image-large);
`;

function Sidebar({ isOpen, setIsOpen }) {
  // GRAB NAVIGATION
  const navigate = useNavigate();
  // HANDLE TOGGLE ON CLICK
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);
  }
  // HANDLE ORDER NOW NAVIGATION
  function handleClick() {
    navigate('/menu');
  }
  // RETURN THE COMPONENT
  return (
    <>
      <StyledSidebar>
        <Nav>
          <Hamburger value={isOpen} onClick={() => handleToggle()}>
            <RiShoppingBag2Line />
          </Hamburger>
          <Hamburger onClick={() => handleToggle()}>
            <CgClose />
          </Hamburger>
        </Nav>
        <Bag />
        <EmptyContainer>
          <Land>
            <Img src="/images/backgrounds/empty.png" />
          </Land>
          <Land>Your bag is empty.</Land>
          <Land>
            <Button onClick={handleClick}>order now</Button>
          </Land>
        </EmptyContainer>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
