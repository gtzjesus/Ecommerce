import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { useSelector } from 'react-redux';
import { getTotalBagPrice, getTotalBagQuantity } from './bagSlice';
const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--margin-large) 0;
  padding: var(--padding-medium);
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
  justify-content: center;
`;
function BagTotal() {
  // SELECTORS FROM REDUX
  const totalBagQuantity = useSelector(getTotalBagQuantity);
  const totalBagPrice = useSelector(getTotalBagPrice);
  // GRAB TAX FROM TOTAL PRICE
  const taxAmount = totalBagPrice / 8.25;
  // GRAB FULL AMOUNT
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
          <span>total ({totalBagQuantity} items)</span>
          <span>${fullAmount.toFixed(2)}</span>
        </Total>
        <ButtonLayout>
          <Button variation="primary" size="small">
            continue to payment
          </Button>
        </ButtonLayout>
      </TotalContent>
    </TotalContainer>
  );
}

export default BagTotal;
