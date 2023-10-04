import styled from 'styled-components';
import Navigation from '../../ui/app/Navigation';
import Button from '../../ui/buttons/Button';

const StyledCheckout = styled.div`
  height: var(--height-filled-window);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: var(--margin-small) var(--margin-large);
`;

const Input = styled.input`
  appearance: none;
  border: 0.2em solid var(--background-tile);
  background: hsl(0 0 0/0);
  padding: 0.85em 1.5em;
  margin: var(--margin-xsmall) 0;

  border-radius: 2em;
  transition: 1s;
  &:hover,
  &:focus,
  &:active {
    background: var(--background-tile);
    color: var(--color-red);
  }
`;

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: var(--gap-small);
`;

function Checkout() {
  // GRAB BAG FOR CHECKOUT
  //   const bag = useSelector(getBag());
  //   console.log(bag);
  return (
    <>
      <Navigation />
      <StyledCheckout>
        <Form>
          <Input type="text" placeholder="Full name"></Input>
          <Input type="text" placeholder="email"></Input>
          <Input type="text" placeholder="Phone number"></Input>
          <ButtonLayout>
            <Button>submit payment</Button>
          </ButtonLayout>
        </Form>
      </StyledCheckout>
    </>
  );
}

export default Checkout;
