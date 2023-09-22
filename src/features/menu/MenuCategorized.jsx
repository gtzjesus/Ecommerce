import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuCategorizedItems from './MenuCategorizedItems';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const StyledMenu = styled.div`
  margin: var(--margin-medium);
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: var(--font-large);
  color: var(--color-red);
  padding: var(--padding-small);
`;

function MenuCategorized({ category }) {
  // GRAB CONTEXT API
  const { items, isLoading, error } = useContext(MenuContext);
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
          <MenuCategorizedItems category={category} item={item} key={item.id} />
        ))}
      </StyledMenu>
    </>
  );
}

export default MenuCategorized;
