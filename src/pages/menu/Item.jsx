import { useContext, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { useNavigate } from 'react-router';
import Navigation from '../../ui/app/Navigation';
import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { addItem, addFaves } from '../../features/bag/bagSlice';
import { useDispatch } from 'react-redux';

const Page = styled.div`
  background-color: var(--background-tile);
  padding: var(--height-row) 0;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-tile);
  padding: var(--padding-large);
  margin: var(--margin-large);
  border: 0.25rem solid var(--color-red);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: var(--font-small);
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: var(--font-medium);
`;

const Img = styled.img`
  width: var(--image-large);
`;

const Description = styled.span`
  font-size: var(--font-small);
  width: var(--width-description);
  text-align: center;
`;

const Currency = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  padding: var(--padding-small);
`;

function Item() {
  // GRAB NAVIGATION hook
  const navigate = useNavigate();
  // CREATE DISPATCH to call actions
  const dispatch = useDispatch();
  // STATE MANAGEMENT for disabled buttons
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // GRAB PATHNAME, ONLY INTERESTED IN THE ID
  const pathname = Number(location.pathname.split('/')[2].replace(':', '')) - 1;

  // GRAB ITEMS FROM MENU CONTEXT
  const { items } = useContext(MenuContext);

  // SORT ITEMS BY ID TO DISPLAY INDIVIDUAL COMPONENT
  function dynamicSort(property) {
    return function (a, b) {
      return a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    };
  }
  // STORE SORT COMM
  const sortedItems = items.sort(dynamicSort('id'));
  // CREATE ITEM OBJECT FROM THIS LIST
  const item = sortedItems;
  // CREATE NEW ITEM TO BE ADDED as action.payload
  const newItem = {
    id: item[pathname].id,
    image: item[pathname].image,
    name: item[pathname].name,
    description: item[pathname].description,
    quantity: 1,
    regularPrice: item[pathname].regularPrice,
    discount: item[pathname].discount,
    totalPrice:
      item[pathname].regularPrice * item[pathname].quantity -
      item[pathname].discount,
    faves: item[pathname].faves,
  };

  // HANDLE ADDING TO FAVES on bag click
  function handleAddToFaves() {
    // DISPATCH TO ADD ACTION addtofaves
    dispatch(addFaves(newItem));
    // TOAST FOR SUCCESS
    toast.success('Added to faves');
  }

  // HANDLE ADDING TO BAG on button click
  function handleAddToBag() {
    // DISPATCH TO ADD ACTION addtobag
    dispatch(addItem(newItem));
    // DISABLE BUTTON AFTER FIRST CLICK (addtobag once)
    setIsButtonDisabled(true);

    // TOAST FOR SUCCESS
    toast.success('Added to bag ($' + newItem.regularPrice + ')');
  }

  // NAVIGATE TO MENU UI CLICK
  function handleMenu() {
    navigate('/menu');
  }

  // RETURN INDIVIDUAL ITEM COMPONENT (FINALLY 😄)
  return (
    <Page>
      <Navigation />
      <StyledItemContainer key={newItem.key}>
        <StyledNav>
          <Button onClick={handleAddToFaves} variation="heart" size="xsmall">
            {newItem.faves === true ? <AiFillHeart /> : <AiOutlineHeart />}
          </Button>

          <Currency>
            <Price>${newItem.regularPrice}</Price>
          </Currency>
        </StyledNav>

        <StyledDesc>
          <Name>{newItem.name}</Name>
          <Img src={newItem.image} />
          <Description>{newItem.description}</Description>
          <ButtonLayout></ButtonLayout>
          <ButtonLayout>
            {!isButtonDisabled ? (
              <Button onClick={handleAddToBag}>Add to bag</Button>
            ) : (
              <Button variation="third" size="small" onClick={handleMenu}>
                Add more items
              </Button>
            )}
          </ButtonLayout>
        </StyledDesc>
      </StyledItemContainer>
    </Page>
  );
}

export default Item;
