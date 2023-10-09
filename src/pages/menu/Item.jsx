import { useContext, useState } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { useLocation } from 'react-router';
import Navigation from '../../ui/app/Navigation';
import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { updateFaves } from '../../services/apiItems';
import toast from 'react-hot-toast';
import { addItem } from '../../features/bag/bagSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentQuantityById } from '../../features/bag/bagSlice';

const Page = styled.div`
  background-color: var(--background-primary);
  margin: var(--height-row) 0;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-tile);
  padding: var(--padding-large);
  margin: var(--margin-large);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: var(--font-small);
`;

const Discount = styled.span`
  font-size: var(--font-xsmall);
  color: var(--color-red);
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

// const Quantity = styled.span`
//   font-size: var(--font-xsmall);
//   color: var(--color-red);
// `;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  padding: var(--padding-small);
`;

const Amount = styled.span`
  font-size: var(--font-small);
  padding: 0 var(--padding-medium);
`;

function Item() {
  // CREATE DISPATCH TO CALL addToBag ACTION
  const dispatch = useDispatch();

  const [isHeart, setIsHeart] = useState(false);

  const location = useLocation();
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

  // HANDLE CLICK FOR HEART FAVE
  function handleHeart() {
    // GRAB FAVES
    const faves = items[pathname].faves;

    // CHECK IF faves IS EMPTY
    if (faves === '') {
      // IF NULL WE WANT TO ADD yes STRING INTO ROW
      updateFaves(pathname + 1, 'yes');

      // UPDATE HEART STATE
      setIsHeart(true);

      // UPDATE DOM SO THAT IT RENDERS AFTER CLICK OF HEART

      // TOAST FOR SUCCESS
      toast.success('Added to faves');
    }
    // CHECK IF faves HAS yes
    if (faves === 'yes') {
      // IF yes FOUND, WANT TO SET TO EMPTY STRING
      updateFaves(pathname + 1, '');
      setIsHeart(false);
      // TOAST FOR ERROR
      toast.error('Removed from faves');
    }
  }

  // HANDLE ADDING TO BAG
  function handleAddToBag() {
    // CREATE NEW ITEM TO BE ADDED as action.payload
    const newItem = {
      id: item[pathname].id,
      image: item[pathname].image,
      name: item[pathname].name,
      quantity: 1,
      regularPrice: item[pathname].regularPrice,
      discount: item[pathname].discount,
      totalPrice:
        item[pathname].regularPrice * item[pathname].quantity -
        item[pathname].discount,
    };
    // TOAST FOR SUCCESS
    toast.success('Added to bag');
    // DISPATCH TO ADD ACTION addtobag
    dispatch(addItem(newItem));
  }

  // GRAB QUANTITY
  const currentQuantity = useSelector(
    getCurrentQuantityById([item[pathname].id])
  );

  // RETURN INDIVIDUAL ITEM COMPONENT (FINALLY 😄)
  return (
    <Page>
      <Navigation />
      <StyledItemContainer key={item[pathname].key}>
        <StyledNav>
          <Button
            value={isHeart}
            variation="heart"
            size="xsmall"
            onClick={handleHeart}
          >
            {item[pathname].faves === 'yes' ? (
              <AiFillHeart />
            ) : (
              <AiOutlineHeart />
            )}
          </Button>

          <Currency>
            <Price>${item[pathname].regularPrice}</Price>
            <Discount>-${item[pathname].discount}</Discount>
          </Currency>
        </StyledNav>

        <StyledDesc>
          <Name>{item[pathname].name}</Name>
          <Img src={item[pathname].image} />

          <Description>{item[pathname].description}</Description>

          <ButtonLayout></ButtonLayout>
          <ButtonLayout>
            <Button onClick={handleAddToBag}>
              Add to bag (${item[pathname].regularPrice})
            </Button>
          </ButtonLayout>
        </StyledDesc>
      </StyledItemContainer>
    </Page>
  );
}

export default Item;
