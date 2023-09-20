import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import MenuCategorized from '../../pages/menu/MenuCategorized';
import Nav from '../../ui/header/Nav';

const StyledMenu = styled.div``;

function MenuItems({ category }) {
  // GRAB ALL ITEMS
  const { items, isLoading, error } = useItems();
  // SPINNER IF NETWORK IS LOADING
  if (isLoading) return <Spinner />;
  // TEST IF SUCCESS
  if (error) throw new Error('Failed to grab items');

  return (
    <>
      <Nav />
      <StyledMenu>
        {items.map((item) => (
          <MenuCategorized category={category} item={item} key={item.id} />
        ))}
      </StyledMenu>
    </>
  );
}

export default MenuItems;
