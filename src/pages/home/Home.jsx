import styled from 'styled-components';

const StyledHome = styled.div`
  height: var(--height-full-window);
  background: url('/images/backgrounds/hotdogsbackground.png');
  background-size: cover;
  background-repeat: none;
`;
function Home() {
  return <StyledHome></StyledHome>;
}

export default Home;
