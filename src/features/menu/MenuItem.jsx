import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import Button from '../../ui/buttons/Button';
import { AiOutlineHeart } from 'react-icons/ai';

const StyledItemContainer = styled.li`
  list-style: none;

  // SET INSIDE CONTAINER TO OUTSIDE PARENT CONTAINER
  width: 90%;
`;

const StyledDesc = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heart = styled.div``;

const Name = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.25rem;
  text-align: center;
`;
const Img = styled.img`
  width: 55%;
`;

const Description = styled.h1`
  font-size: 1.35rem;
  letter-spacing: 0.09rem;
  text-align: left;
  width: 75%;
`;

function MenuItem({ item, isLoading }) {
  // DECONSTRUCT THE OBJECT TO OUR LIKING
  const { id, image, name, description } = item;
  console.log(item);

  // HANDLE CLICK FOR ADDING TO BAG
  function handleClick() {
    console.log(id);
  }

  if (isLoading) return <Spinner />;

  return (
    <StyledItemContainer>
      <StyledDesc>
        <Heart>
          <Button variation="heart" size="xsmall">
            <AiOutlineHeart />
          </Button>
        </Heart>
        <Name>{name}</Name>
        <Img src={image} />
        <Description>{description}</Description>
        <Button variation="primary" size="small" onClick={handleClick}>
          Add to bag
        </Button>
      </StyledDesc>
    </StyledItemContainer>
  );
}

export default MenuItem;
