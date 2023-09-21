import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import MenuCategorizedItems from './MenuCategorized';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: var(--background-primary);
  padding: 2rem;
  gap: 2rem;
`;

const Img = styled.img`
  width: var(--image-small);
  /* object-fit: cover;
  object-position: center; */
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.div`
  font-size: var(--font-medium);
`;
const Tag = styled.span`
  font-size: var(--font-xsmall);
  border-radius: 2rem;
  background-color: var(--color-red);
  width: fit-content;
  color: var(--color-white);
  padding: 1rem;
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
