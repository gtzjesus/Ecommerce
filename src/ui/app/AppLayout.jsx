import { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? <Sidebar /> : <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}

export default AppLayout;
