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
  justify-content: space-evenly;
  background-color: #f2d077;
`;

const Name = styled.div`
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  padding: 2rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
`;

const Logo = styled.div`
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  padding: 1rem;
`;

const Hamburger = styled.button`
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  padding: 2rem;
  border: none;
  background: none;
  cursor: pointer;
`;

function Header({ isOpen, setIsOpen }) {
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);
  }
  return (
    <StyledHeader>
      <Name>Doggos</Name>
      <Logo>
        <img src="/logo/hotdog.png" />
      </Logo>
      <Hamburger value={isOpen} onClick={() => handleToggle()}>
        <img src="/hamburger/hamburger.png" />
      </Hamburger>
    </StyledHeader>
  );
}

export default Header;
