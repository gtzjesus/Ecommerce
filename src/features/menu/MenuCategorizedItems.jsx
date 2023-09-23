import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuItem from './MenuItem';

const StyledMenuItem = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--background-primary);
`;

function MenuCategorizedItems({ item, category, isLoading, error }) {
  // SPINNER IF LOADING
  if (isLoading) return <Spinner />;
  // CHECK FOR ANY ERRORS
  if (error) throw new Error('Trouble loading item or category');
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
