import styled from 'styled-components';
import BagItem from '../../features/bag/BagItem';
import { useNavigate } from 'react-router';
import Button from '../buttons/Button';
import BagTotal from '../../features/bag/BagTotal';
import {
  getBag,
  getCurrentQuantityById,
  getTotalBagQuantity,
} from '../../features/bag/bagSlice';
import { useSelector } from 'react-redux';

const BagContainer = styled.div`
  top: 0;
  left: 0;
  width: var(--width-full-window);
  background-color: var(--background-tile);
  z-index: var(--z-top);
  // CREATE SCROLLABLE COMPONENT BAG
  max-height: var(--height-full-window);
  overflow-y: auto;
`;

const Username = styled.span`
  color: var(--color-red);
  font-size: var(--font-medium);
  padding: var(--padding-medium);
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background-tile);
  height: var(--height-full-window);
`;

const EmptyContent = styled.div`
  align-items: center;
  font-size: var(--font-medium);
  margin: var(--margin-small);
`;

const EmptyImg = styled.img`
  width: var(--image-large);
`;

function Bag() {
  // GRAB BAG FROM local storage
  let bag = useSelector(getBag);
  // GRAB QUANTITY from local storage
  let quantity = useSelector(getTotalBagQuantity);
  // CREATE total + ADD ALL VALUES INSIDE ARRAY using a reducer
  let totalQuantity = 0;
  if (quantity > 0) {
    const reducer = (accumulator, current) => accumulator + current;
    totalQuantity = quantity.reduce(reducer);
  }
  // GRAB INDIVIDUAL BAG ITEM (map returns array of items)
  const bagItem = bag.map((item) => item);

  // GRAB NAVIGATION HOOK
  const navigate = useNavigate();
  // HANDLER FOR NAVIGATION (emptycontainer)
  function handleNavigate() {
    navigate('/menu');
  }

  return (
    <BagContainer>
      {bag.length === 0 ? (
        <EmptyContainer>
          <EmptyContent>
            <EmptyImg src="/images/backgrounds/empty.png" />
          </EmptyContent>
          <EmptyContent>Your bag is empty.</EmptyContent>
          <EmptyContent>
            <Button onClick={handleNavigate}>order now</Button>
          </EmptyContent>
        </EmptyContainer>
      ) : (
        <>
          <Username>Your bag, {totalQuantity} items</Username>
          <BagItem item={bagItem} key={bagItem.id} />
          <BagTotal totalQuantity={totalQuantity} />
        </>
      )}
    </BagContainer>
  );
}

export default Bag;
