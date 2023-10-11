import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: var(--z-top);
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
  border: 0.2em solid var(--background-primary);
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

function SignupForm() {
  const { signup } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: reset });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Greeting>Sign up for free</Greeting>
      <InputContainer>
        <Input
          type="text"
          placeholder="name"
          id="fullName"
          {...register('fullName', { required: 'This is required' })}
          error={errors?.fullName?.message}
        ></Input>
        <Input
          type="email"
          placeholder="email"
          id="email"
          error={errors?.email?.message}
          {...register('email', {
            required: 'This is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Provide a valid email',
            },
          })}
        ></Input>
        <Input
          type="password"
          placeholder="password"
          id="password"
          error={errors?.password?.message}
          {...register('password', {
            required: 'This is required',
            minLength: {
              value: 8,
              message: 'Password needs minimum of 8 characters',
            },
          })}
        ></Input>
        <Input
          type="password"
          placeholder="repeat password"
          id="passwordConfirm"
          error={errors?.passwordConfirm?.message}
          {...register('passwordConfirm', {
            required: 'This is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        ></Input>

        <Button>Create account</Button>
      </InputContainer>
    </Form>
  );
}

export default SignupForm;
