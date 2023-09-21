import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import MenuCategorizedItems from './MenuCategorizedItems';

const StyledMenu = styled.div`
  margin: 1rem;
`;

function MenuCategorized({ category }) {
  // GRAB ALL ITEMS
  const { items, isLoading, error } = useItems();
  // SPINNER IF NETWORK IS LOADING
  if (isLoading) return <Spinner />;
  // TEST IF SUCCESS
  if (error) throw new Error('Failed to grab items');

  return (
    <>
      <StyledMenu>
        {items.map((item) => (
          <MenuCategorizedItems
            category={category}
            item={item}
            key={item.id}
            isLoading={isLoading}
            error={error}
          />
        ))}
      </StyledMenu>
    </>
  );
}

export default MenuCategorized;
