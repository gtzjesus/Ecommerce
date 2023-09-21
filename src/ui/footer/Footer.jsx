import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-family: 'Bebas Neue', sans-serif;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  background-color: #ede1d1;
  border-radius: 1.5rem 1rem 0 0;
  color: inherit;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`;

const StyledUnorderedList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  align-items: center;
`;

const StyledList = styled.li`
  display: inline-block;
  cursor: pointer;
  font-size: 1.25rem;
  letter-spacing: 0.15rem;
  padding: 0 1.5rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledUnorderedList>
        <StyledList>
          <Link style={{ textDecoration: 'none', color: '#B21A10' }} to="/menu">
            menu
          </Link>
        </StyledList>
        <StyledList>
          <Link
            style={{ textDecoration: 'none', color: '#B21A10' }}
            to="/favorites"
          >
            faves
          </Link>
        </StyledList>
        <StyledList>
          <Link
            style={{ textDecoration: 'none', color: '#B21A10' }}
            to="/orders"
          >
            orders
          </Link>
        </StyledList>
      </StyledUnorderedList>
    </StyledFooter>
  );
}

export default Footer;
