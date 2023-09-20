import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ede1d1;
  padding-top: 2rem;
`;
const Hamburger = styled.button`
  padding: 2rem;
  border: none;
  background: none;
  cursor: pointer;
`;

const Logo = styled.div`
  padding: 2rem;
  cursor: pointer;
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
