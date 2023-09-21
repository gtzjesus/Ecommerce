import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-family: 'Bebas Neue', sans-serif;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ede1d1;
  border-radius: 1.5rem 1.5rem 0 0;
  color: inherit;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`;

const StyledUnorderedList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  text-decoration: none;
`;

const StyledList = styled.li`
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
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
