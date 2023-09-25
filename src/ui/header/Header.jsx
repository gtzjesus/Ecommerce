import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { CgUser } from 'react-icons/cg';
import { useState } from 'react';
import Sidebar from '../sidebar/Sidebar v1';

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
  // CREATE STATE FOR CLICKED EVENTS
  let [navTo, setNavTo] = useState('');
  // GRAB NAVIGATE REACT HOOK
  const navigate = useNavigate();
  // HANDLE TOGGLE FOR OPENING/CLOSING
  function handleToggle() {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);
  }

  function handleClick(value) {
    if (value === 'user') {
      setNavTo('user');
    }

    if (value === 'bag') setNavTo('bag');
    if (value === 'home') {
      setNavTo('home');
      navigate('/');
    }
  }

  // NAVIGATE ON CLICK

  // HEADER COMPONENT
  return (
    <StyledHeader>
      {navTo !== 'home' ? (
        <>
          <Hamburger value={isOpen} onClick={() => handleToggle()}>
            <CgUser value={navTo} onClick={() => handleClick('user')} />
          </Hamburger>

          <Logo onClick={() => handleClick('home')}>
            <img src="/logo/hotdog.png" />
          </Logo>

          <Hamburger value={isOpen} onClick={() => handleToggle()}>
            <RiShoppingBag2Line
              value={navTo}
              onClick={() => handleClick('bag')}
            />
          </Hamburger>
        </>
      ) : (
        'not home'
      )}

      {navTo !== 'nav' ? (
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navTo={navTo}
          setNavTo={setNavTo}
        />
      ) : (
        'hello there'
      )}
    </StyledHeader>
  );
}

export default Header;
