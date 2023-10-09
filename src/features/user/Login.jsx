import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.span`
  display: flex;
  align-items: center;
  gap: var(--gap-small);
  color: var(--color-black);
  font-size: var(--font-medium);
  padding: var(--padding-medium);
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--width-full-window);
  padding: var(--padding-xsmall);
  gap: var(--gap-medium);
`;

const Input = styled.input`
  appearance: none;
  border: 0.2em solid var(--background-tile);
  background: hsl(0 0 0/0);
  padding: 0.85em 1.5em;
  font-size: 16px;
  width: var(--width-full-window);

  border-radius: 2em;
  transition: 1s;
  &:hover,
  &:focus,
  &:active {
    background: var(--background-tile);
    color: var(--color-red);
  }
`;
function Login() {
  return (
    <div>
      <Form>
        <Greeting>
          Sign in or <Button variation="third">create account</Button>
        </Greeting>
        <InputContainer>
          <Input type="text" placeholder="email"></Input>
          <Input type="password" placeholder="password"></Input>
          <Button>sign in</Button>
        </InputContainer>
      </Form>
    </div>
  );
}

export default Login;
