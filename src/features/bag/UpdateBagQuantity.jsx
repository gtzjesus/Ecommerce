import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from './bagSlice';

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  padding: var(--padding-small);
`;

const Amount = styled.span`
  font-size: var(--font-xsmall);
  padding: 0 var(--padding-xsmall);
`;

function UpdateBagQuantity({ item }) {
  // GRAB DISPATCH TO USE ACTIONS
  const dispatch = useDispatch();
  return (
    <ButtonLayout>
      <Button
        variation="quantity"
        size="small"
        onClick={() => dispatch(decreaseItemQuantity(item.id))}
      >
        -
      </Button>
      <Amount>{item.quantity}</Amount>
      <Button
        variation="quantity"
        size="small"
        onClick={() => dispatch(increaseItemQuantity(item.id))}
      >
        +
      </Button>
    </ButtonLayout>
  );
}

export default UpdateBagQuantity;
