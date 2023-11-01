import styled from 'styled-components';
import Modal from '../../ui/modals/Modal';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import MenuCategorizedItems from './MenuCategorized';

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: var(--background-tile);
  padding: var(--padding-large);
  margin: var(--margin-xsmall);
  cursor: pointer;
  height: var(--height-row);
  border-bottom: 0.25rem solid var(--color-red);
`;

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding-medium);
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-medium);
  color: var(--color-red);
`;

const Img = styled.img`
  width: var(--image-small);
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--gap-small);
`;

const Title = styled.div`
  font-size: var(--font-medium);
  color: var(--color-red);
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
          <StyledNav>
            <>
              <Hamburger>
                <AiOutlineClose />
              </Hamburger>
              <Title>{name}</Title>
            </>
          </StyledNav>
          <MenuCategorizedItems
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            category={category}
          />
        </Modal>
      )}
      <Info>
        <Img src={categoryImage} />
        <Title>{name}</Title>
      </Info>
    </StyledRow>
  );
}

export default MenuRow;
