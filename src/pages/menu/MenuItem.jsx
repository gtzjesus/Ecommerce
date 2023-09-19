import Spinner from '../../ui/spinners/Spinner';
import useItems from './useItems';

function MenuItem() {
  const { item, isLoading, error } = useItems();
  const { id, description } = item;

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
