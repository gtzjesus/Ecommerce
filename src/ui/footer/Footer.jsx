import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #ede1d1;

  color: inherit;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const StyledList = styled.li`
  font-family: 'Bebas Neue', sans-serif;
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
`;
function Footer() {
  return (
    <StyledFooter>
      <StyledUnorderedList>
        <StyledList>menu</StyledList>
        <StyledList>favorites</StyledList>
      </StyledUnorderedList>
    </StyledFooter>
  );
}

export default Footer;
