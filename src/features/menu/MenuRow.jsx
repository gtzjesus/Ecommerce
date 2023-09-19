import styled from 'styled-components';

const StyledRow = styled.div`
  background-color: pink;
`;
function MenuRow({ item }) {
  const {
    id: itemId,
    name,
    description,
    quantity,
    regularPrice,
    discount,
    image,
  } = item;
  return (
    <StyledRow>
      <h1>{image}</h1>
      <h1>{itemId}</h1>
      <h1>{name}</h1>
      <h1>{description}</h1>
      <h1>{quantity}</h1>
      <h1>{regularPrice}</h1>
      <h1>{discount}</h1>
    </StyledRow>
  );
}

export default MenuRow;
