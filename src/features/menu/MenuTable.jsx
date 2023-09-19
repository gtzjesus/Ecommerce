import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuRow from './MenuRow';
import useItems from '../../pages/menu/useItems';

const StyledTable = styled.div`
  display: flex;
`;

function MenuTable() {
  // const {
  //   isLoading,
  //   data: items,
  //   error,
  // } = useQuery({
  //   queryKey: ['items'],
  //   queryFn: getItems,
  // });

  const { items, isLoading, error } = useItems();

  if (isLoading) return <Spinner />;

  if (error) {
    console.log(error);
  }

  return (
    <StyledTable>
      {items.map((item) => (
        <MenuRow item={item} key={item.id} />
      ))}
    </StyledTable>
  );
}

export default MenuTable;
