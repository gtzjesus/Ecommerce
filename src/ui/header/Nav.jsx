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

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ede1d1;
  margin-top: 2rem;
`;
const Hamburger = styled.button`
  padding: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
`;

const Logo = styled.div`
  padding: 2rem;
  cursor: pointer;
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
`;
function Nav({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
    handleToggle();
  }

  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);

    // TOGGLE CLICK TO SET FALSE WINDOW
  }
  return (
    <Navigation>
      <Logo onClick={handleHome}>
        <img src="/logo/hotdog.png" />
      </Logo>
      <Hamburger onClick={() => handleToggle()}>
        <img src="/hamburger/hamburger-close.png" />
      </Hamburger>
    </Navigation>
  );
}

export default Nav;
