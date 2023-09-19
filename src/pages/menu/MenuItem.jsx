import Spinner from '../../ui/spinners/Spinner';
import useItems from './useItems';

function MenuItem({ item }) {
  const { isLoading, error } = useItems();
  const { id, description } = item;

  // CALCULATE CATEGORY FOR EACH ITEM

  if (isLoading) return <Spinner />;
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {id}
      {description}
    </div>
  );
}

export default MenuItem;
