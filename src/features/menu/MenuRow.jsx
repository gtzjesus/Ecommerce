import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  /* border: 0.25rem solid #f2d077;
  margin: 0.25rem; */
  padding: 1rem;
`;

const Img = styled.img`
  display: block;
  width: 5.5rem;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
`;
const Tag = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.85rem;
  border-radius: 4rem;
  background-color: #b21a10;
  width: fit-content;
  color: #ffff;
  padding: 0.75rem;
`;
function MenuRow({ category }) {
  const { name, tag, categoryImage } = category;

  // REDUCE NAME
  return (
    <StyledRow>
      <Img src={categoryImage} />
      <Title>{name}</Title>
      {!tag ? null : <Tag>{tag}</Tag>}
    </StyledRow>
  );
}

export default MenuRow;
