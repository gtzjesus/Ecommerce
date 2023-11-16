import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Navigation from '../../ui/navigation/Navigation';
import FavesItem from '../../features/faves/FavesItem';
import Button from '../../ui/buttons/Button';
import { useNavigate } from 'react-router';
import { getFaves } from '../../features/faves/favesSlice';

const StyledFaves = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
`;

const StyledTitle = styled.div`
  display: grid;
  text-align: center;
  margin: var(--margin-nav-height) 0 var(--margin-medium) 0;
  font-size: var(--font-medium);
  color: var(--color-red);
`;

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
function Faves() {
  // CREATE DISPATCH to call actions
  const dispatch = useDispatch();
  // GRAB favesItems FROM LOCAL STORAGE (if any)
  const faves = dispatch(getFaves);
  // GRAB CUSTOM FOR NAVIGATION
  const navigate = useNavigate();
  // HANDLER FOR NAVIGATION (emptycontainer)
  function handleNavigate() {
    navigate('/menu');
  }

  return (
    <>
      <Navigation />
      {faves.length === 0 ? (
        <EmptyContainer>
          <EmptyContent>
            <EmptyImg src="/images/backgrounds/favorites.png" />
          </EmptyContent>
          <EmptyContent>No favorites to display.</EmptyContent>
          <EmptyContent>
            <Button onClick={handleNavigate}>browse items</Button>
          </EmptyContent>
        </EmptyContainer>
      ) : (
        <>
          <StyledTitle>Favorites</StyledTitle>
          <StyledFaves>
            {faves.map((fave) => (
              <FavesItem fave={fave} key={fave.id} />
            ))}
          </StyledFaves>
        </>
      )}
    </>
  );
}

export default Faves;
