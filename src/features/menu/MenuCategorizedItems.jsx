import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuItem from './MenuItem';

const StyledMenuItem = styled.ul`
  display: flex;
  font-family: 'Bebas Neue', sans-serif;
  padding: 2.5rem;
  background-color: #fffbf0;
  top: 2.5%;
  -ms-transform: translateY(2.5%);
  transform: translateY(2.5%);
`;

function MenuCategorizedItems({ item, category, isLoading, error }) {
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

  return pureItem === pureCategory ? (
    <>
      <StyledMenuItem>
        <MenuItem item={item} isLoading={isLoading} />
      </StyledMenuItem>
    </>
  ) : null;
}

export default MenuCategorizedItems;
