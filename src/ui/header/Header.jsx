import { useNavigate } from 'react-router';
import styled, { keyframes } from 'styled-components';

// ANIMATION
const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// STYLED COMPONENTS
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ede1d1;
  margin-bottom: 0.25rem;
`;

const Logo = styled.div`
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  padding: 1rem;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 2rem;
  padding: 2rem;
  font-family: 'Bebas Neue', sans-serif;
`;

const Hamburger = styled.button`
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  padding: 2rem;
  border: none;
  background: none;
  cursor: pointer;
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
      <Logo onClick={handleHome}>
        <img src="/logo/hotdog.png" />
      </Logo>
      <Name>Doggos</Name>
      <Hamburger value={isOpen} onClick={() => handleToggle()}>
        <img src="/hamburger/hamburger.png" />
      </Hamburger>
    </StyledHeader>
  );
}

export default Header;
