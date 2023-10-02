import styled from 'styled-components';
import BagItem from '../../features/bag/BagItem';
import { useNavigate } from 'react-router';
import BagTotal from '../../features/bag/BagTotal';
import Button from '../buttons/Button';

import { useSelector } from 'react-redux';
import { getBag } from '../../features/bag/bagSlice';

const Container = styled.div`
  height: var(--height-filled-window);
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
  background-color: var(--background-primary);
  height: var(--height-full-window);
`;

const EmptyContent = styled.div`
  align-items: center;
  font-size: var(--font-medium);
`;

const EmptyImg = styled.img`
  width: var(--image-large);
`;

function Bag() {
  const bag = useSelector(getBag);
  const bagItem = bag.map((item) => item);
  // GRAB NAVIGATION HOOK
  const navigate = useNavigate();
  // HANDLER FOR NAVIGATION (emptycontainer)
  function handleNavigate() {
    navigate('/menu');
  }
  return (
    <Container>
      <Username>Your bag jesus,</Username>
      {bagItem.length !== 0 ? (
        <>
          <BagItem item={bagItem} key={bagItem.id} />
          <BagTotal />
        </>
      ) : (
        <EmptyContainer>
          <EmptyContent>
            <EmptyImg src="/images/backgrounds/empty.png" />
          </EmptyContent>
          <EmptyContent>Your bag is empty.</EmptyContent>
          <EmptyContent>
            <Button onClick={handleNavigate}>order now</Button>
          </EmptyContent>
        </EmptyContainer>
      )}
    </Container>
  );
}

export default Bag;
