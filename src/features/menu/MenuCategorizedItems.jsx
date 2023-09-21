import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuItem from './MenuItem';

const StyledMenuItem = styled.ul`
  display: flex;
  justify-content: center;
  background-color: var(--background-primary);
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

  // GRAB TO COMPARE CATEGORY && NAME
  const pureItem = item.category;
  const pureCategory = category.name;

  // RETURN OUR INDIVIDUAL ITEM COMPONENT
  return pureItem === pureCategory ? (
    <>
      <StyledMenuItem>
        <MenuItem item={item} isLoading={isLoading} />
      </StyledMenuItem>
    </>
  ) : null;
}

export default MenuCategorizedItems;
