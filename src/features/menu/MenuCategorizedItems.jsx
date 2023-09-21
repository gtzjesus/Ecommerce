import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import Button from '../../ui/buttons/Button';
import { AiOutlineHeart } from 'react-icons/ai';

const StyledMenuItem = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  padding: 2.5rem;
  background-color: #fffbf0;
  margin: 0;
  position: relative;
  top: 15%;
  -ms-transform: translateY(15%);
  transform: translateY(15%);
`;

const StyledDesc = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heart = styled.div`
  display: grid;
  text-align: right;
  margin: right;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.25rem;
  text-align: center;
`;
const Img = styled.img`
  display: block;
  width: 50%;
`;

const Description = styled.h1`
  font-size: 1.25rem;
  text-align: center;
`;

function MenuCategorizedItems({ item, category, isLoading, error }) {
  // DECONSTRUCT THE OBJECT TO OUR LIKING
  const { id, image, name, description } = item;

  // DECONSTRUCT THE OBJECT TO OUR LIKING
  // const { name } = category;

  // CALCULATE CATEGORY FOR EACH ITEM
  if (isLoading) return <Spinner />;

  // SPINNER IF LOADING

  // CHECK FOR ANY ERRORS
  if (error) {
    console.log(error);
  }

  // CREATE VARIABLES TO COMPARE
  const pureItem = item.category;
  const pureCategory = category.name;

  // HANDLE CLICK FOR ADDING TO BAG
  function handleClick() {
    console.log(id);
  }

  return pureItem === pureCategory ? (
    <>
      <StyledMenuItem>
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
      </StyledMenuItem>
    </>
  ) : null;
}

export default MenuCategorizedItems;
