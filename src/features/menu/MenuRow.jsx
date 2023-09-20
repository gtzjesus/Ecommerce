import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import MenuCategorizedItems from './MenuCategorized';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.15rem solid #ede1d1;
  padding: 1rem 0.5rem;
  background-color: #ede1d1;
  margin: 0.25rem 0;
`;

const Img = styled.img`
  display: block;
  width: 5.25rem;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.75rem;
`;
const Tag = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.75rem;
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
          <MenuCategorizedItems
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
