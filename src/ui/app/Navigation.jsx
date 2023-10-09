import { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Navigation() {
  // CREATE STATE TO SET HEADER + SIDEBARS OPEN/CLOSE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navigation;
