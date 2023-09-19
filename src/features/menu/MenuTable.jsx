import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuRow from './MenuRow';
import useCategories from '../../pages/menu/useCategories';

const StyledTable = styled.div`
  display: grid;
  align-items: center;
  margin: auto;
`;

function MenuTable() {
  const { categories, isLoading, error } = useCategories();

  if (isLoading) return <Spinner />;

  if (error) {
    console.log(error);
  }

  return (
    <StyledTable>
      {categories.map((category) => (
        <MenuRow category={category} key={category.id} />
      ))}
    </StyledTable>
  );
}

export default MenuTable;
