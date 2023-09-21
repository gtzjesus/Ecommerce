import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import MenuCategorizedItems from './MenuCategorized';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: var(--background-primary);
  padding: var(--padding-medium);
  gap: var(--gap-medium);
`;

const Img = styled.img`
  width: var(--image-small);
  /* object-fit: cover;
  object-position: center; */
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-small);
`;

const Title = styled.div`
  font-size: var(--font-medium);
`;
const Tag = styled.span`
  font-size: var(--font-xsmall);
  border-radius: var(--border-tag);
  background-color: var(--color-red);
  width: fit-content;
  color: var(--color-white);
  padding: var(--padding-small);
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
