import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../header/Nav';

const StyledSidebar = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9d193;
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
    <>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
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
