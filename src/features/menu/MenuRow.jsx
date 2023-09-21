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
  cursor: pointer;
`;

const Img = styled.img`
  width: var(--image-small);
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

// ROW COMPONENT FOR EACH CATEGORY USED IN MENU PAGE
function MenuRow({ category }) {
  // STATE FOR OPENING/CLOSING MODAL
  const [isOpenModal, setIsOpenModal] = useState(false);
  // VALUE STATE
  const [value, setValue] = useState();
  // DECONSTRUCT CATEGORY
  const { name, tag, categoryImage } = category;
  // HANDLER FUNCTION FOR OPENING/CLOSING MODAL
  function handleClick() {
    setIsOpenModal((show) => !show), setValue(category.name);
  }
  // ROW + MODAL JSX
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
