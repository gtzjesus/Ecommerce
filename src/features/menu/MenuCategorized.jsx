import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import MenuCategorizedItems from './MenuCategorizedItems';

const StyledMenu = styled.div`
  margin: var(--margin-medium);
`;

const Title = styled.h1`
  text-align: center;
  font-size: var(--font-large);
  color: var(--color-red);
`;

function MenuCategorized({ category }) {
  // GRAB ITEMS
  const { items, isLoading, error } = useItems();
  // CHECK ISLOADING STATE FOR SPINNER
  if (isLoading) return <Spinner />;
  // ERROR HANDLE
  if (error) throw new Error('Failed to grab items');

  // RETURN CATEGORIZED MENU
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
