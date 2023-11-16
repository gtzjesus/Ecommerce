import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import styled from 'styled-components';
import Spinner from '../spinners/Spinner';
import FeaturedItemMenu from './FeaturedItemMenu';

const StyledFeatured = styled.div`
  display: flex;
  flex-direction: column;
  margin: var(--margin-large) 0;
`;

const Introduction = styled.div`
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

const Fea = styled.span`
  border-bottom: 0.25rem solid var(--color-red);
`;

function Featured() {
  // GRAB ITEMS with our context
  const { items, isLoading, error } = useContext(MenuContext);
  // CHECK isLoading STATE FOR SPINNER
  if (isLoading) return <Spinner />;
  // ERROR HANDLE
  if (error) throw new Error('Failed to grab items');

  // RETURN FEATURED ITEM
  return (
    <StyledFeatured>
      <Introduction>
        <Title>Take a Peek </Title>
        <Subtitle>
          at our <Fea>featured</Fea> items
        </Subtitle>
      </Introduction>
      {items.map((item) => (
        <FeaturedItemMenu item={item} key={item.key} />
      ))}
    </StyledFeatured>
  );
}

export default Featured;
