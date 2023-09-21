import styled from 'styled-components';
import Spinner from '../../ui/spinners/Spinner';
import MenuRow from './MenuRow';
import useCategories from '../../pages/menu/useCategories';

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

function MenuTable() {
  // GRAB CATEGORIES
  const { categories, isLoading, error } = useCategories();
  // CHECK LOADING STATE FOR SPINNER
  if (isLoading) return <Spinner />;
  // ERRO HANDLE
  if (error) throw new Error('Issue grabbing categories');

  return (
    <StyledTable>
      {categories.map((category) => (
        <MenuRow category={category} key={category.id} />
      ))}
    </StyledTable>
  );
}

export default MenuTable;
