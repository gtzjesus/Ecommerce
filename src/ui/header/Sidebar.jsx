import { Link, useNavigate } from 'react-router-dom';
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
const StyledSidebar = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9d193;
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

const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4rem;
  gap: 5rem;
  padding-top: 5rem;
  text-decoration: none;
  height: 100vh;
`;
const Nav = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e9d193;
  display: flex;
  gap: 5rem;
`;

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);

    // TOGGLE CLICK TO SET FALSE WINDOW
  }

  function handleHome() {
    navigate('/');
    handleToggle();
  }

  return (
    <>
      <Nav>
        <Logo onClick={handleHome}>
          <img src="/logo/hotdog.png" />
        </Logo>
        <Hamburger onClick={() => handleToggle()}>
          <img src="/hamburger/hamburger-close.png" />
        </Hamburger>
      </Nav>
      <StyledSidebar>
        <div>
          <Links>
            <Link
              style={{ textDecoration: 'none', color: '#B21A10' }}
              to="/menu"
              onClick={handleToggle}
            >
              menu
            </Link>
            <Link
              style={{ color: '#B21A10', textDecoration: 'none' }}
              to="/member"
            >
              member
            </Link>
            <Link
              style={{ color: '#B21A10', textDecoration: 'none' }}
              to="/account"
            >
              account
            </Link>
          </Links>
        </div>
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
