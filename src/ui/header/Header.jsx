import styled from 'styled-components';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Bag from '../sidebars/Bag';
import Nav from '../sidebars/Nav';
import { useNavigate } from 'react-router';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { BiSolidUser, BiUser } from 'react-icons/bi';
import { getTotalBagQuantity } from '../../features/bag/bagSlice';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useUser } from '../../features/authentication/useUser';

import { useSelector } from 'react-redux';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: var(--width-full-window);
  background-color: var(--background-tile);
  padding: var(--padding-header);
  z-index: var(--z-top);
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding-medium) 0;
`;

const Container = styled.div`
  width: var(--width-full-window);
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

const Items = styled.span`
  color: var(--color-red);
  font-size: var(--font-xsmall);
`;

function Header({ isOpen, setIsOpen }) {
  // GRAB ISAUTHENTICATED custom hook
  const { isAuthenticated } = useUser();
  // GRAB quantity from local storage
  let quantity = useSelector(getTotalBagQuantity);

  // GRAB BAG FROM local storage
  let bag =
    localStorage.getItem('bagItems') != null
      ? JSON.parse(localStorage.getItem('bagItems'))
      : [];
  // NAVIGATION HOOK
  const navigate = useNavigate();
  // CREATE STATE FOR CLICKED EVENTS
  let [navTo, setNavTo] = useState('');
  // HANDLE TOGGLE FOR OPENING/CLOSING
  function handleToggle(value) {
    if (isOpen === false) setIsOpen(true);
    if (isOpen === true) setIsOpen(false);

    // OPEN SIDEBAR BASED ON VALUE CLICKED FROM header ICONS
    if (value === '') {
      setNavTo('');
    }
    if (value === 'bag') {
      setNavTo('bag');
    }
    if (value === 'user') {
      setNavTo('user');
    }
  }

  // HANDLE HOME LINK
  function handleHome() {
    navigate('/');
  }

  // HEADER COMPONENT
  return (
    <StyledHeader>
      {navTo === '' ? (
        <>
          <Hamburger value={isOpen} onClick={() => handleToggle('user')}>
            <HiOutlineMenuAlt1 value={navTo} />
          </Hamburger>

          <Logo onClick={handleHome}>
            <img src="/logo/hotdog.png" />
          </Logo>

          {bag.length === 0 ? (
            <Hamburger value={isOpen} onClick={() => handleToggle('bag')}>
              <RiShoppingBag2Line value={navTo} />
            </Hamburger>
          ) : (
            <Hamburger value={isOpen} onClick={() => handleToggle('bag')}>
              <Items>{quantity}</Items>
              <RiShoppingBag2Fill value={navTo} />
            </Hamburger>
          )}
        </>
      ) : (
        ''
      )}
      {navTo === 'bag' ? (
        <Container>
          <StyledNav>
            <Hamburger>
              <AiOutlineClose value={isOpen} onClick={() => handleToggle('')} />
            </Hamburger>
            {bag.length === 0 ? (
              <Hamburger value={isOpen} onClick={() => handleToggle('bag')}>
                <RiShoppingBag2Line value={navTo} />
              </Hamburger>
            ) : (
              <Hamburger value={isOpen} onClick={() => handleToggle('bag')}>
                <Items>{quantity}</Items>
                <RiShoppingBag2Fill value={navTo} />
              </Hamburger>
            )}
          </StyledNav>
          {/* DISPLAY SIDEBARS */}
          <Bag />
        </Container>
      ) : (
        ''
      )}
      {navTo === 'user' ? (
        <Container>
          <StyledNav>
            <Hamburger>
              {isAuthenticated ? <BiSolidUser /> : <BiUser />}
            </Hamburger>
            <Hamburger>
              <AiOutlineClose value={isOpen} onClick={() => handleToggle('')} />
            </Hamburger>
          </StyledNav>
          {/* DISPLAY SIDEBARS */}
          <Nav />
        </Container>
      ) : (
        ''
      )}
    </StyledHeader>
  );
}

export default Header;
