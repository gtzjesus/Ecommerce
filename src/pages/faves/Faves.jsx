import styled from 'styled-components';
import Navigation from '../../ui/app/Navigation';
import Footer from '../../ui/footer/Footer';
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import MenuItem from '../../features/menu/MenuItem';

const Favorites = styled.div`
  background-color: var(--background-primary);
  padding: 0 0 var(--padding-xlarge) 0;
`;

const StyledFaves = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--background-primary);
  list-style: none;
  padding: var(--padding-xsmall);
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-primary);
  height: var(--height-full-window);
`;

const Title = styled.span`
  background-color: var(--background-primary);
  display: flex;
  justify-content: center;
  font-size: var(--font-large);
  color: var(--color-red);
  padding: var(--margin-medium);
`;

const Land = styled.div`
  align-items: center;
  font-size: var(--font-medium);
`;

function Faves() {
  // API CALL TO GRAB ITEMS FOR DISPLAYING FAVES
  const { items } = useContext(MenuContext);
  // FILTER ITEMS WITH yes FAVES
  const itemArray = items.filter((item) => item.faves);
  console.log(itemArray);

  return (
    <Favorites>
      <Navigation />
      {itemArray.length === 0 ? (
        <EmptyContainer>
          <Land>
            No faves to display <FaRegFaceSadTear />
          </Land>
        </EmptyContainer>
      ) : (
        <>
          <Title>faves</Title>
          <StyledFaves>
            {itemArray.map((item) =>
              item.faves === 'yes' ? (
                <MenuItem item={item} key={item.key} />
              ) : null
            )}
          </StyledFaves>
        </>
      )}
      <Footer />
    </Favorites>
  );
}

export default Faves;
