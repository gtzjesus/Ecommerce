import styled from 'styled-components';
import Button from '../../ui/buttons/Button';

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background-tile);
  height: var(--height-full-window);
`;

const EmptyContent = styled.div`
  align-items: center;
  font-size: var(--font-medium);
  margin: var(--margin-small);
`;

const EmptyImg = styled.img`
  width: var(--image-large);
`;
function SignupComplete() {
  return (
    <EmptyContainer>
      <EmptyContent>verify email to continue!</EmptyContent>
      <EmptyContent>
        <EmptyImg src="/images/backgrounds/taco-mail.png" />
      </EmptyContent>
      <EmptyContent>It should arrive shortly...</EmptyContent>
    </EmptyContainer>
  );
}

export default SignupComplete;
