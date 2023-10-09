import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import MenuCategorizedItems from './MenuCategorized';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: var(--background-tile);
  padding: var(--padding-medium);
  margin: var(--margin-xsmall);
  gap: var(--gap-medium) 0;
  cursor: pointer;
  height: var(--height-row);
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

// ROW COMPONENT FOR EACH CATEGORY USED IN MENU PAGE
function MenuRow({ category }) {
  // STATE FOR OPENING/CLOSING MODAL
  const [isOpenModal, setIsOpenModal] = useState(false);
  // VALUE STATE
  const [value, setValue] = useState();
  // DECONSTRUCT CATEGORY
  const { name, categoryImage } = category;
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
        {/* {!tag ? null : <Tag>{tag}</Tag>} */}
        <Title>{name}</Title>
      </Info>
    </StyledRow>
  );
}

export default MenuRow;
