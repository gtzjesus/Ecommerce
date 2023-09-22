import styled, { css } from 'styled-components';

const sizes = {
  xsmall: css`
    font-size: 3rem;
  `,
  small: css`
    font-size: 2rem;
    padding: 0.8rem 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #ffff;
    background-color: #b21a10;
    width: 50vw;
    margin: 2.5rem;
    &:hover {
      background-color: #b21a10;
    }
  `,
  secondary: css`
    color: inherit;
    background-color: #ede1d1;

    &:hover {
      background-color: #ede1d1;
    }
  `,
  heart: css`
    color: var(--color-red);
    background-color: inherit;
    box-shadow: none;
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  font-family: 'Bebas Neue', sans-serif;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  z-index: var(--z-third);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
};

export default Button;
