import { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default Navigation;
