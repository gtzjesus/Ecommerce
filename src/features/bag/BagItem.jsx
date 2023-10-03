import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import { useDispatch } from 'react-redux';
import { deleteItem } from './bagSlice';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-tile);
  padding: var(--padding-medium);
  margin: var(--margin-medium) 0;

  border: 0.1rem solid var(--color-red);
  height: 12.5vh;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--padding-small);
`;

const Img = styled.img`
  width: var(--image-small);
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: var(--font-xsmall);
  color: var(--color-red);
`;

const Price = styled.span`
  color: var(--color-red);
  font-size: var(--font-small);
`;

const Name = styled.span`
  font-size: var(--font-small);
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-xsmall);
  color: var(--color-red);
`;

function BagItem({ item }) {
  console.log(item.id);
  const dispatch = useDispatch();
  // DECONSTRUCT ITEM
  return item.map((item) =>
    item ? (
      <StyledRow key={item.key}>
        <StyledDescription>
          <Img src={item.image} />
          <Name>{item.name}</Name>
          <Quantity>x{item.quantity}</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>${item.regularPrice}</Price>
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
