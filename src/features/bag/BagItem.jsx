import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../../ui/buttons/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './bagSlice';
import { decreaseItemQuantity, increaseItemQuantity } from './bagSlice';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-tile);
  padding: var(--padding-medium);
  margin: var(--margin-medium) var(--margin-xsmall);

  border: 0.15rem solid var(--color-red);

  height: var(--height-row);
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--padding-small);
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-small);
  color: var(--color-red);
`;

const Img = styled.img`
  width: var(--image-small);
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: var(--font-xsmall);
  color: var(--color-red);
`;

const StyledPrices = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-xsmall);
`;

const Price = styled.span`
  color: var(--color-red);
  font-size: var(--font-xssmall);
`;

const TotalPrice = styled.span`
  font-size: var(--font-small);
`;

const Name = styled.span`
  font-size: var(--font-small);
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Amount = styled.span`
  font-size: var(--font-xsmall);
  padding: var(--padding-xsmall) 0;
`;

function BagItem({ items }) {
  // GRAB DISPATCH FOR ACTIONS IN BAG
  const dispatch = useDispatch();

  // DECONSTRUCT ITEM
  return items.map((item) =>
    item ? (
      <StyledRow key={item.id}>
        <StyledDescription>
          <Img src={item.image} />
          <Name>{item.name}</Name>
          <Quantity>x{item.quantity}</Quantity>
        </StyledDescription>
        <StyledDescription>
          <StyledPrices>
            <Price>${Math.round(item.regularPrice * 100) / 100} each</Price>
            <TotalPrice>${Math.round(item.totalPrice * 100) / 100}</TotalPrice>
          </StyledPrices>
          <ButtonLayout>
            <Button
              variation="quantity"
              size="small"
              onClick={() => dispatch(increaseItemQuantity(item.id))}
            >
              +
            </Button>
            <Amount>{item.quantity}</Amount>
            <Button
              variation="quantity"
              size="small"
              onClick={() => dispatch(decreaseItemQuantity(item.id))}
            >
              -
            </Button>
          </ButtonLayout>
          <Hamburger onClick={() => dispatch(deleteItem(item.id))}>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
    ) : (
      ''
    )
  );
}

export default BagItem;
