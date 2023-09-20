import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import MenuItems from './MenuItems';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.15rem solid #e9d193;
  padding: 1rem 2rem;
  background-color: #e8d8c3;
  margin: 0.5rem 0;

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;

const Img = styled.img`
  display: block;
  width: 6rem;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
`;
const Tag = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  border-radius: 2rem;
  background-color: #b21a10;
  width: fit-content;
  color: #ffff;
  padding: 0.75rem;
`;
function MenuRow({ category }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [value, setValue] = useState();
  const { name, tag, categoryImage } = category;

  function handleClick() {
    setIsOpenModal((show) => !show), setValue(category.name);
  }

  // REDUCE NAME
  return (
    <StyledRow value={value} onClick={handleClick}>
      {isOpenModal && (
        <Modal>
          <MenuItems
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            category={category}
          />
        </Modal>
      )}
      <Img src={categoryImage} />
      <Title>{name}</Title>
      {!tag ? null : <Tag>{tag}</Tag>}
    </StyledRow>
  );
}

export default MenuRow;
