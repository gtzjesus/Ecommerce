import styled from 'styled-components';
import Navigation from '../../ui/app/Navigation';
import Footer from '../../ui/footer/Footer';
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import MenuItem from '../../features/menu/MenuItem';

const StyledFaves = styled.div`
  background-color: var(--background-primary);
`;

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-primary);
  height: var(--height-full-window);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: var(--font-large);
  color: var(--color-red);
  padding: var(--padding-small);
`;

const Land = styled.span`
  align-items: center;
  font-size: var(--font-medium);
`;

function Faves() {
  // API CALL TO GRAB ITEMS FOR DISPLAYING FAVES
  const { items } = useContext(MenuContext);
  // FILTER ITEMS WITH yes FAVES
  const itemArray = items.filter((item) => item.faves);
  console.log(itemArray);

  // CHECK FOR ITEMS WITH yes FAVES (HEART)
  //   const faves = items.map((item) => item.faves === 'yes');
  //   console.log(faves);

  return (
    <>
      <Navigation />
      <StyledFaves>
        <Title>Faves</Title>

        {itemArray.map((item) =>
          item.faves === 'yes' ? (
            <MenuItem item={item} key={item.key} />
          ) : (
            <EmptyContainer key={item.key}>
              <Land>
                No faves to display <FaRegFaceSadTear />
              </Land>
            </EmptyContainer>
          )
        )}
      </StyledFaves>
      <Footer />
    </>
  );
}

export default Faves;
