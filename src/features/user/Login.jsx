import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { useState } from 'react';
import { useLogin } from '../authentication/useLogin';
import SpinnerMini from '../../ui/spinners/SpinnerMini';

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
  // SET STATE FOR email and password
  const [email, setEmail] = useState('jesus@outlook.com');
  const [password, setPassword] = useState('pass0987');
  // GRAB LOGIN
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Greeting>
          Sign in or <Button variation="third">create account</Button>
        </Greeting>
        <InputContainer>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          ></Input>
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          ></Input>
          <Button disabled={isLoading}>
            {!isLoading ? 'sign in' : <SpinnerMini />}
          </Button>
        </InputContainer>
      </Form>
    </div>
  );
}

export default Login;
