import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import useCategories from './useCategories';
import Button from '../../ui/buttons/Button';

const StyledMenuItem = styled.ul`
  font-family: 'Bebas Neue', sans-serif;
  margin: 2rem;
  border: 1px solid white;
  padding: 2rem;
  background-color: #fffbf0;
`;

const StyledDesc = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: block;
  width: 75%;
`;

const Name = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.5rem;
  text-align: center;
`;

const Description = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
`;

function MenuCategorized({ item, category, isLoading }) {
  // GRAB CATEGORIES
  const { error: categoryError, isLoading: categoryLoading } = useCategories();

  // GRAB CURRENTLY SELECTED CATEGORY

  // DECONSTRUCT THE OBJECT TO OUR LIKING
  const { image, name, description } = item;

  // DECONSTRUCT THE OBJECT TO OUR LIKING
  // const { name } = category;

  // CALCULATE CATEGORY FOR EACH ITEM
  if (categoryLoading || isLoading) return <Spinner />;

  // SPINNER IF LOADING

  // CHECK FOR ANY ERRORS
  if (categoryError) {
    console.log(categoryError);
  }

  // CREATE VARIABLES TO COMPARE
  const pureItem = item.category;
  const pureCategory = category.name;

  // console.log(pureItem);
  // console.log(pureCategory);

  function handleClick() {
    console.log('ive been clicked');
  }

  return pureItem === pureCategory ? (
    <StyledMenuItem>
      <StyledDesc onClick={handleClick}>
        <Name>{name}</Name>
        <Img src={image} />
        <Description>{description}</Description>
        <StyledButtons>
          <Button variation="secondary" size="small">
            View item
          </Button>
          <Button variation="primary" size="small">
            Add to cart
          </Button>
        </StyledButtons>
      </StyledDesc>
    </StyledMenuItem>
  ) : null;
}

export default MenuCategorized;
