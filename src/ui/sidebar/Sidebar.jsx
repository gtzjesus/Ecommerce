import { Link } from 'react-router-dom';
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
  justify-content: space-between;
  background-color: #f2d077;
  height: 100vh;
`;

const Hamburger = styled.button`
  animation: ${slideIn} 1.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  padding: 2rem;
  border: none;
  background: none;
  cursor: pointer;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Link to="/menu">Menu</Link>
      <Hamburger>
        <img src="/hamburger/hamburger-close.png" />
      </Hamburger>
    </StyledSidebar>
  );
}

export default Sidebar;
