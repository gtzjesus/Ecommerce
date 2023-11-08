import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Navigation from '../../ui/app/Navigation';
import { getFaves } from '../../features/bag/bagSlice';
import FavesItem from '../../features/faves/FavesItem';

const StyledFaves = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
`;

const StyledTitle = styled.div`
  display: grid;
  text-align: center;
  margin: var(--margin-nav-height) 0 0 0;
  font-size: var(--font-medium);
  color: var(--color-red);
`;
function Faves() {
  // CREATE DISPATCH to call actions
  const dispatch = useDispatch();
  // GRAB favesItems FROM LOCAL STORAGE (if any)
  const faves = dispatch(getFaves);
  return (
    <>
      <Navigation />
      <StyledTitle>Favorites</StyledTitle>
      <StyledFaves>
        {faves.map((fave) => (
          <FavesItem fave={fave} key={fave.id} />
        ))}
      </StyledFaves>
    </>
  );
}

export default Faves;
