import styled from 'styled-components';
import useItems from '../../pages/menu/useItems';
import Spinner from '../../ui/spinners/Spinner';
import BagRow from './BagRow';

const StyledTable = styled.div`
  background-color: red;
`;

function BagTable() {
  // GRAB ITEMS
  const { items, isLoading, error } = useItems();
  // CHECK LOADING STATE FOR SPINNER
  if (isLoading) return <Spinner />;
  // HANDLE ERROR
  if (error) throw new Error('Issue grabbing items');
  return (
    <StyledTable>
      {items.map((item) => (
        <BagRow item={item} key={item.id} />
      ))}
    </StyledTable>
  );
}

export default BagTable;
