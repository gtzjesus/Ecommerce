import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { RiShoppingBag2Line, RiAccountCircleLine } from 'react-icons/ri';

// STYLED COMPONENTS
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ede1d1;
  padding: 0.5rem 0.25rem;
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 2rem;
  color: #802620;
`;

function Header({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);
  }

  function handleHome() {
    navigate('/');
  }
  return (
    <StyledHeader>
      <Hamburger value={isOpen} onClick={() => handleToggle()}>
        <RiAccountCircleLine />
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
