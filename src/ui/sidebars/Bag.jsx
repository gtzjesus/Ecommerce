import styled from 'styled-components';
import BagItem from '../../features/bag/BagItem';
import { useNavigate } from 'react-router';
import Button from '../buttons/Button';
import BagTotal from '../../features/bag/BagTotal';
import { getBag } from '../../features/bag/bagSlice';
import { useLocalStorage } from '../../services/useLocalStorage';
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
  let bag = [JSON.parse(localStorage.getItem('item'))] || [];
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
      {bag[0] === null ? (
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
          <Username>Your bag,</Username>
          <BagItem item={bagItem} key={bagItem.id} />
          <BagTotal />
        </>
      )}
    </BagContainer>
  );
}

export default Bag;
