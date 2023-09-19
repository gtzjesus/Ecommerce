import styled from 'styled-components';

const StyledPageNotFound = styled.main`
  background-color: #f2d077;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: #b21a10;
  border-radius: 1rem;

  padding: 2.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
    color: #ffff;
  }
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Box>
        <h1>PAGE NOT FOUND ❌</h1>
      </Box>
    </StyledPageNotFound>
  );
}
export default PageNotFound;
