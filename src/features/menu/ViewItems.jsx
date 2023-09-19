import { useState } from 'react';
import Modal from '../../ui/modals/Modal';
import MenuItems from './MenuItems';

function ViewItems() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpenModal((show) => !show)}>view item</div>
      {isOpenModal && (
        <Modal>
          <MenuItems
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        </Modal>
      )}
    </div>
  );
}
export default ViewItems;
