import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { useLocation } from 'react-router';
import Navigation from '../../ui/app/Navigation';
import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Footer from '../../ui/footer/Footer';
import { updateHeart } from '../../services/apiItems';

const Page = styled.div`
  background: url('/images/backgrounds/item.webp');
  background-size: cover;
  background-position: center center;
  height: var(--height-full-window);
`;

const StyledItemContainer = styled.div`
  background-color: #f7ead9;
  padding: var(--padding-large);
  margin: var(--margin-large);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: var(--font-medium);
`;

const Category = styled.span`
  font-size: var(--font-small);
  padding: var(--padding-small);
`;

const Img = styled.img`
  width: var(--image-large);
`;

const Description = styled.span`
  font-size: var(--font-small);
  width: var(--width-description);
`;

const Currency = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Price = styled.span`
  font-size: var(--font-small);
`;

const Discount = styled.span`
  font-size: var(--font-xsmall);
  color: var(--color-red);
`;

function Item() {
  const location = useLocation();
  // GRAB PATHNAME, ONLY INTERESTED IN THE ID
  const pathname = Number(location.pathname.split('/')[2].replace(':', '')) - 1;

  // GRAB ITEMS FROM MENU CONTEXT
  const { items } = useContext(MenuContext);

  // ACCESS ID INSIDE OBJECT

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
    // GRAB ITEM ID
    const updatedItem = item[pathname];
    // CHECK IF faves IS FILLED IN DATABASE
    if (items[pathname].faves === '') {
      // IF NULL WE WANT TO ADD yes STRING INTO ROW
      updateHeart();
      console.log(updatedItem);
    }
  }

  // console.log(item[pathname].faves);

  // RETURN INDIVIDUAL ITEM COMPONENT (FINALLY 😄)
  return (
    <Page>
      <Navigation />
      <StyledItemContainer key={item[pathname].key}>
        <StyledNav>
          <Button variation="heart" size="xsmall" onClick={handleHeart}>
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
          <Category>{item[pathname].category}</Category>
          <Img src={item[pathname].image} />

          <Description>{item[pathname].description}</Description>

          <Button variation="primary" size="small">
            Add to bag
          </Button>
        </StyledDesc>
      </StyledItemContainer>
      <Footer />
    </Page>
  );
}

export default Item;
