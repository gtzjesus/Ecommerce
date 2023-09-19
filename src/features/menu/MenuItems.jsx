import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import MenuItem from '../../pages/menu/MenuItem';

const StyledMenu = styled.div`
  background-color: red;
`;
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
    <StyledMenu>
      {items.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
      <button value={isOpenModal} onClick={handleToggle}>
        x
      </button>
    </StyledMenu>
  );
}

export default MenuItems;
