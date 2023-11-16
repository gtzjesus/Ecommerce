import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import styled from 'styled-components';
import Spinner from '../spinners/Spinner';
import FeaturedItem from './FeaturedItem';

const StyledFeatured = styled.div`
  padding: var(--margin-xlarge) 0;
  background-color: var(--background-tile);
`;

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: var(--gap-small);
`;

const StyledMenu = styled.div`
  display: flex;
  gap: var(--gap-medium);
  background-color: var(--background-secondary);
  padding: var(--margin-large);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: scroll;
  max-width: 100vw;
  max-height: 100vh;
  object-fit: cover;
  z-index: 0;
`;

const Title = styled.span`
  font-size: var(--font-large);
  color: var(--color-black);
  padding-bottom: var(--margin-xlarge);
`;

const Subtitle = styled.span`
  font-size: var(--font-small);
  color: var(--color-black);
  padding-bottom: var(--margin-xlarge);
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
        <Title>Take a Peek</Title>
        <Subtitle>
          at our <Fea>featured</Fea> items
        </Subtitle>
      </Introduction>
      <StyledMenu>
        {items.map((item) => (
          <FeaturedItem item={item} key={item.key} />
        ))}
      </StyledMenu>
    </StyledFeatured>
  );
}

export default Featured;
