import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { RiShoppingBag2Line } from 'react-icons/ri';

import { CgUser } from 'react-icons/cg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--background-primary);
  padding: var(--padding-header);
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-medium);
  color: var(--color-red);
`;

function Header({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  // HANDLE TOGGLE FOR OPENING/CLOSING
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);
  }
  // NAVIGATE ON CLICK
  function handleHome() {
    navigate('/');
  }
  return (
    <StyledHeader>
      <Hamburger value={isOpen} onClick={() => handleToggle()}>
        <CgUser />
      </Hamburger>
      <Logo onClick={handleHome}>
        <img src="/logo/hotdog.png" />
      </Logo>
      <Hamburger value={isOpen} onClick={() => handleToggle()}>
        <RiShoppingBag2Line />
      </Hamburger>
    </StyledHeader>
  );
}

export default Header;
