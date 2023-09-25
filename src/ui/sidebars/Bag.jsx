import styled from 'styled-components';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router';

const Container = styled.div`
  width: var(--width-full-window);
`;

const StyledBag = styled.div`
  background-color: red;
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background-primary);
  height: var(--height-full-window);
`;

const Land = styled.div`
  align-items: center;
  font-size: var(--font-medium);
`;

const Img = styled.img`
  width: var(--image-large);
`;

function Bag() {
  // GRAB NAVIGATION HOOK
  const navigate = useNavigate();
  // HANDLER FOR NAVIGATION
  function handleNavigate() {
    navigate('/menu');
  }
  return (
    <Container>
      <StyledBag>
        <EmptyContainer>
          <Land>
            <Img src="/images/backgrounds/empty.png" />
          </Land>
          <Land>Your bag is empty.</Land>
          <Land>
            <Button onClick={handleNavigate}>order now</Button>
          </Land>
        </EmptyContainer>
      </StyledBag>
    </Container>
  );
}

export default Bag;
