import styled from 'styled-components';
import { RiShoppingBag2Line } from 'react-icons/ri';
import { CgUser } from 'react-icons/cg';
import { useState } from 'react';
import Bag from '../sidebars/Bag';
import User from '../sidebars/User';
import { useNavigate } from 'react-router';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { PiArrowFatLineLeft, PiArrowFatLineRight } from 'react-icons/pi';

import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getBag } from '../../features/bag/bagSlice';

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: var(--width-full-window);
  background-color: var(--background-primary);
  padding: var(--padding-header);
  z-index: var(--z-top);
  box-shadow: var(--background-tile) 0px 10px 28px,
    var(--background-tile) 0px 10px 8px;
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
  transition: 5s ease-in;
  color: var(--color-red);
  border-radius: 50%;
  padding: var(--padding-xsmall);
  font-size: var(--font-small);
`;

function Header({ isOpen, setIsOpen }) {
  // GRAB BAG WITH selector HOOK
  const bag = useSelector(getBag);
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
            <CgUser value={navTo} />
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
              <Items>{bag.length}</Items>
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
              <PiArrowFatLineLeft
                value={isOpen}
                onClick={() => handleToggle('')}
              />
            </Hamburger>
            {bag.length === 0 ? (
              <Hamburger value={isOpen} onClick={() => handleToggle('bag')}>
                <RiShoppingBag2Line value={navTo} />
              </Hamburger>
            ) : (
              <Hamburger value={isOpen} onClick={() => handleToggle('bag')}>
                <Items>{bag.length}</Items>
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
              <FaUser />
            </Hamburger>
            <Hamburger>
              <PiArrowFatLineRight
                value={isOpen}
                onClick={() => handleToggle('')}
              />
            </Hamburger>
          </StyledNav>
          {/* DISPLAY SIDEBARS */}
          <User />
        </Container>
      ) : (
        ''
      )}
    </StyledHeader>
  );
}

export default Header;
