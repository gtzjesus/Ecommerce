import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuCategorizedItems from './MenuCategorizedItems';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const StyledMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
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
        {items.map((item) => (
          <MenuCategorizedItems category={category} item={item} key={item.id} />
        ))}
      </StyledMenu>
    </>
  );
}

export default MenuCategorized;
