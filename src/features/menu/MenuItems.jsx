import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import MenuItem from '../../pages/menu/MenuCategorized';
import Button from '../../ui/buttons/Button';
import Nav from '../../ui/header/Nav';

const StyledMenu = styled.div``;

function MenuItems({ isOpenModal, setIsOpenModal }) {
  // GRAB ALL CATEGORIES
  const { items, isLoading, error } = useItems();
  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to grab items');

  // MIDDLEWARE TO MODIFY ITEMS

  function handleToggle(event) {
    event.preventDefault();
    setIsOpenModal(false);
  }
  return (
    <>
      <Nav />
      <Button value={isOpenModal} onClick={handleToggle}>
        x
      </Button>
      <StyledMenu>
        {items.map((item) => (
          <MenuItem item={item} key={item.id} />
        ))}
      </StyledMenu>
    </>
  );
}

export default MenuItems;
