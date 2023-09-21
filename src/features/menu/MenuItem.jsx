import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import Button from '../../ui/buttons/Button';
import { AiOutlineHeart } from 'react-icons/ai';

const StyledItemContainer = styled.div`
  background-color: var(--color-tan);
  padding: var(--padding-medium);
  margin: var(--margin-large);
`;

const StyledDesc = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h1`
  font-size: var(--font-medium);
`;
const Img = styled.img`
  width: var(--image-large);
`;

const Description = styled.h1`
  font-size: var(--font-small);
  width: var(--width-description);
`;

function MenuItem({ item, isLoading }) {
  // DECONSTRUCT THE OBJECT TO OUR LIKING
  const { image, name, description } = item;
  console.log(item);

  // HANDLE CLICK FOR ADDING TO BAG
  // function handleClick() {
  //   console.log(id);
  // }

  if (isLoading) return <Spinner />;

  return (
    <StyledItemContainer>
      <Button variation="heart" size="xsmall">
        <AiOutlineHeart />
      </Button>
      <StyledDesc>
        <Name>{name}</Name>
        <Img src={image} />
        <Description>{description}</Description>
        {/* <Button variation="primary" size="small" onClick={handleClick}>
          Add to bag
        </Button> */}
      </StyledDesc>
    </StyledItemContainer>
  );
}

export default MenuItem;
