import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import useCategories from './useCategories';

const StyledMenuItem = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 75%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 4rem;
`;

const Description = styled.h2`
  font-size: 2.5rem;
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

  return pureItem === pureCategory ? (
    <StyledMenuItem>
      <StyledDesc>
        <Name>{name}</Name>
        <Img src={image} />

        <Description>{description}</Description>
      </StyledDesc>
    </StyledMenuItem>
  ) : null;
}

export default MenuCategorized;
