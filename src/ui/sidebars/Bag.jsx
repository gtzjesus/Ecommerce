import styled from 'styled-components';
import BagItem from '../../features/bag/BagRow';
import { useNavigate } from 'react-router';

const Container = styled.div``;

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
  // GRAB NAVIGATION HOOK
  const navigate = useNavigate();
  // HANDLER FOR NAVIGATION (emptycontainer)
  function handleNavigate() {
    navigate('/menu');
  }
  return (
    <Container>
      <Username>Your bag jesus,</Username>
      <BagItem />

      {/* <EmptyContainer>
          <EmptyContent>
            <EmptyImg src="/images/backgrounds/empty.png" />
          </EmptyContent>
          <EmptyContent>Your bag is empty.</EmptyContent>
          <EmptyContent>
            <Button onClick={handleNavigate}>order now</Button>
          </EmptyContent>
        </EmptyContainer> */}
    </Container>
  );
}

export default Bag;
