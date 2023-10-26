import { useState } from 'react';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import { getTotalBagQuantity } from '../../features/bag/bagSlice';

function Navigation() {
  // GRAB QUANTITY from local storage
  let quantity = useSelector(getTotalBagQuantity);
  // CREATE total + ADD ALL VALUES INSIDE ARRAY using a reducer
  let totalQuantity = 0;
  if (quantity != 0) {
    const reducer = (accumulator, current) => accumulator + current;
    totalQuantity = quantity.reduce(reducer);
  }

  // CREATE STATE TO SET HEADER + SIDEBARS OPEN/CLOSE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header
        totalQuantity={totalQuantity}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}

export default Navigation;
