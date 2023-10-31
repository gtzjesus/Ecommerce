import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearBag, getTotalBagPrice } from './bagSlice';
import { useNavigate } from 'react-router';
const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 var(--margin-xsmall);
  padding: var(--padding-medium);
  background-color: var(--background-tile);
`;

const TotalContent = styled.div`
  display: grid;
  gap: var(--padding-small);
`;

const InitialTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-small);
`;

const Tax = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-xsmall);
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-medium);
  color: var(--color-red);
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: var(--gap-small);
`;
function BagTotal({ quantity }) {
  // GRAB NAVIGATE
  const navigate = useNavigate();
  // GRAB DISPATCH FOR ACTIONS
  const dispatch = useDispatch();
  // GRAB total from local storage
  const totalBagPrice = useSelector(getTotalBagPrice);
  // GRAB TAX FROM TOTAL PRICE
  const taxAmount = totalBagPrice / 8.25;
  // GRAB FULL AMOUNT
  // NAVIGATE TO checkout PAGE
  function handleNavigate() {
    navigate('/checkout');
  }
  const fullAmount = totalBagPrice + taxAmount;
  return (
    <TotalContainer>
      <TotalContent>
        <InitialTotal>
          <span>bag total</span>
          <span>${totalBagPrice.toFixed(2)}</span>
        </InitialTotal>

        <Tax>
          <span>tax</span>
          <span>${taxAmount.toFixed(2)}</span>
        </Tax>
        <Total>
          <span>total ({quantity} items)</span>
          <span>${fullAmount.toFixed(2)}</span>
        </Total>
        <ButtonLayout>
          <Button
            variation="third"
            size="small"
            onClick={() => dispatch(clearBag())}
          >
            clear cart
          </Button>
          <Button onClick={handleNavigate}>continue to payment</Button>
        </ButtonLayout>
      </TotalContent>
    </TotalContainer>
  );
}

export default BagTotal;
