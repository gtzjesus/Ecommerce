import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

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
  return (
    <TotalContainer>
      <TotalContent>
        <InitialTotal>
          <span>bag total</span>
          <span>$49.99</span>
        </InitialTotal>

        <Tax>
          <span>tax</span>
          <span>$15.00</span>
        </Tax>
        <Total>
          <span>total</span>
          <span>$64.99</span>
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
