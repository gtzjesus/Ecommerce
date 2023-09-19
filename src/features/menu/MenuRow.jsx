import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import ViewItems from './ViewItems';

const StyledRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border: 0.15rem solid #e9d193;
  margin: 0.25rem 0;
  padding: 1rem 2rem;

  &:hover {
    background-color: #e9d193;
    cursor: pointer;
  }

  &:active {
    background-color: #e9d193;
  }
`;

const Img = styled.img`
  display: block;
  width: 5rem;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
`;
const Tag = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.75rem;
  border-radius: 3rem;
  background-color: #b21a10;
  width: fit-content;
  color: #ffff;
  padding: 0.75rem;
`;
function MenuRow({ category }) {
  const { name, tag, categoryImage } = category;

  function handleToggle() {
    <Modal />;
  }

  // REDUCE NAME
  return (
    <StyledRow onClick={handleToggle}>
      <ViewItems />
      <Img src={categoryImage} />
      <Title>{name}</Title>
      {!tag ? null : <Tag>{tag}</Tag>}
    </StyledRow>
  );
}

export default MenuRow;
