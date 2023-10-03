import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import Button from '../../ui/buttons/Button';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router';

const StyledItemContainer = styled.li`
  background-color: var(--background-tile);
  padding: var(--padding-small);
  margin: var(--margin-xsmall);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: var(--font-small);
`;
const Img = styled.img`
  width: var(--image-large);
`;

// INDIVIDUAL ITEM COMPONENT
function MenuItem({ item, isLoading }) {
  // GRAB NAVIGATION
  const navigate = useNavigate();
  // DECONSTRUCT OBJECT
  const { id, image, name } = item;
  // CHECK LOADING STATE FOR SPINNER
  if (isLoading) return <Spinner />;
  // HANDLER TO NAVIGATE ON TAP
  function handleTap() {
    navigate(`/menu/:${id}`);
  }

  // LAST COMPONENT TREE, DISPLAYS SUMMARY
  return (
    <StyledItemContainer onClick={handleTap}>
      <StyledNav>
        <Button variation="heart" size="xsmall">
          {item.faves === 'yes' ? <AiFillHeart /> : <AiOutlineHeart />}
        </Button>
      </StyledNav>
      <StyledDesc>
        <Name>{name}</Name>
        <Img src={image} />
      </StyledDesc>
    </StyledItemContainer>
  );
}

export default MenuItem;
