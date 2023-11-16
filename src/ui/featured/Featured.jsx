import styled from 'styled-components';

const StyledFeatured = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: var(--gap-small);
`;

const Title = styled.span`
  font-size: var(--font-large);
  color: var(--color-black);
`;

const Subtitle = styled.span`
  font-size: var(--font-small);
  color: var(--color-black);
`;

function Featured() {
  return (
    <StyledFeatured>
      <Title>Take a Peek </Title>
      <Subtitle>at our featured items</Subtitle>
    </StyledFeatured>
  );
}

export default Featured;
