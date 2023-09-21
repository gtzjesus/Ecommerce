import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import Button from '../../ui/buttons/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router';

const StyledItemContainer = styled.li`
  background-color: var(--color-tan);
  padding: var(--padding-medium);
  margin: var(--margin-large);
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: var(--font-medium);
`;
const Img = styled.img`
  width: var(--image-large);
`;

const Description = styled.span`
  font-size: var(--font-small);
  width: var(--width-description);
`;
// INDIVIDUAL ITEM COMPONENT
function MenuItem({ item, isLoading }) {
  // GRAB NAVIGATION
  const navigate = useNavigate();
  // DECONSTRUCT ITEM OBJECT
  const { id, image, name, description } = item;
  // CHECK LOADING STATE FOR SPINNER
  if (isLoading) return <Spinner />;
  // HANDLER TO NAVIGATE ON TAP
  function handleTap() {
    navigate(`/menu/${id}`);
  }

  // LAST COMPONENT TREE, DISPLAYS SUMMARY
  return (
    <StyledItemContainer onClick={handleTap}>
      <Button variation="heart" size="xsmall">
        <AiOutlineHeart />
      </Button>
      <StyledDesc>
        <Name>{name}</Name>
        <Img src={image} />
        <Description>{description}</Description>
        {/* <Button variation="primary" size="small" onClick={handleClick}>
          Add to bag
        </Button> */}
      </StyledDesc>
    </StyledItemContainer>
  );
}

export default MenuItem;
