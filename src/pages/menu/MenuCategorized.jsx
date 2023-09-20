import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import Button from '../../ui/buttons/Button';
const StyledMenuItem = styled.ul`
  display: flex;
  font-family: 'Bebas Neue', sans-serif;
  margin: 2rem;
  border: 1px solid white;
  padding: 2rem;
  background-color: #fffbf0;
`;

const StyledDesc = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: block;
  width: 75%;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.25rem;
  text-align: center;
`;

const Description = styled.h1`
  font-size: 1.25rem;
  text-align: center;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0 1rem 0;
`;

function MenuCategorized({ item, category, isLoading, error }) {
  // DECONSTRUCT THE OBJECT TO OUR LIKING
  const { id, image, name, description } = item;

  // DECONSTRUCT THE OBJECT TO OUR LIKING
  // const { name } = category;

  // CALCULATE CATEGORY FOR EACH ITEM
  if (isLoading) return <Spinner />;

  // SPINNER IF LOADING

  // CHECK FOR ANY ERRORS
  if (error) {
    console.log(error);
  }

  // CREATE VARIABLES TO COMPARE
  const pureItem = item.category;
  const pureCategory = category.name;

  return pureItem === pureCategory ? (
    <StyledMenuItem>
      <StyledDesc>
        <Name>{name}</Name>
        <Img src={image} />
        <Description>{description}</Description>
        <StyledButtons>
          <Button variation="secondary" size="small">
            <a href={`/menu/:${id}`}>View item</a>
          </Button>
          <Button variation="primary" size="small">
            Add to cart
          </Button>
        </StyledButtons>
      </StyledDesc>
    </StyledMenuItem>
  ) : null;
}

export default MenuCategorized;
