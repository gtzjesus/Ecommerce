import styled from 'styled-components';

const Greeting = styled.span`
  color: var(--color-red);
  font-size: var(--font-medium);
  padding: var(--padding-medium);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: var(--width-filled-window);
  padding: var(--padding-medium);
`;

const Input = styled.input`
  appearance: none;
  border: 0.2em solid var(--background-tile);
  background: hsl(0 0 0/0);
  padding: 0.85em 1.5em;
  margin: var(--margin-small) 0;
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
        <Greeting>Sign in</Greeting>

        <Input type="text" placeholder="email"></Input>
        <Input type="text" placeholder="password"></Input>
      </Form>
    </div>
  );
}

export default Login;
