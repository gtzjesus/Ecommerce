import { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import styled from 'styled-components';
import AppLanding from './AppLanding';

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <Main>
        <AppLanding />
      </Main>
    </>
  );
}

export default Navigation;
