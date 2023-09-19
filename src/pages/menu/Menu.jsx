import styled from 'styled-components';
import Navigation from '../../ui/app/Navigation';

const StyledMenu = styled.section`
  background-color: lightblue;
`;

function Menu() {
  return (
    <>
      <Navigation />
      <StyledMenu>hello there</StyledMenu>
    </>
  );
}

export default Menu;
