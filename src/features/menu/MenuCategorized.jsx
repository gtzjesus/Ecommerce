import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import MenuCategorizedItems from './MenuCategorizedItems';

const StyledMenu = styled.div`
  margin: 1rem;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  color: inherit;
  text-align: center;
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
        <Title>{category.name}</Title>
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
