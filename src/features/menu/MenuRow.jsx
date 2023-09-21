import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import MenuCategorizedItems from './MenuCategorized';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: var(--background-primary);
  margin: 0.25rem 0;
  padding: 2rem;
  gap: 2rem;
`;

const Img = styled.img`
  width: var(--image-small);
  /* object-fit: cover;
  object-position: center; */
`;

const Info = styled.div``;

const Title = styled.h1`
  font-size: var(--font-medium);
`;
const Tag = styled.h1`
  font-size: 0.85rem;
  border-radius: 2rem;
  letter-spacing: 0.05rem;
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
      <Info>
        {!tag ? null : <Tag>{tag}</Tag>}
        <Title>{name}</Title>
      </Info>
    </StyledRow>
  );
}

export default MenuRow;
