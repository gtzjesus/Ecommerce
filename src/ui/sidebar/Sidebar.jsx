import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ede1d1;
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

function Sidebar({ isOpen, setIsOpen }) {
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);

    // TOGGLE CLICK TO SET FALSE WINDOW
  }

  return (
    <StyledSidebar>
      <div>
        <Links>
          <Link to="/menu" onClick={handleToggle}></Link>
        </Links>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
