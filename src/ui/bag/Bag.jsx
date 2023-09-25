import styled from 'styled-components';
import Button from '../buttons/Button';
import { useNavigate } from 'react-router';
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
  // GRAB NAVIGATION
  const navigate = useNavigate();
  // HANDLE ORDER NOW NAVIGATION
  function handleClick() {
    navigate('/menu');
  }
  return (
    <EmptyContainer>
      <Land>
        <Img src="/images/backgrounds/empty.png" />
      </Land>
      <Land>Your bag is empty.</Land>
      <Land>
        <Button onClick={handleClick}>order now</Button>
      </Land>
    </EmptyContainer>
  );
}

export default Bag;
