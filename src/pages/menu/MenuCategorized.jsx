import Spinner from '../../ui/spinners/Spinner';
import useCategories from './useCategories';

function MenuCategorized({ item }) {
  const { image } = item;

  // GRAB CATEGORIES
  const {
    categories,
    error: categoryError,
    isLoading: categoryLoading,
  } = useCategories();

  // CALCULATE CATEGORY FOR EACH ITEM
  if (categoryLoading) return <Spinner />;

  if (categoryError) {
    console.log(categoryError);
  }

  const cats = categories.forEach(function (element) {
    return element.name;
  });

  console.log(item.category);
  console.log(categories.map((name) => name.name));

  return (
    <div>
      {item?.category === cats ? <img src={image} /> : 'Heelo World , :('}
    </div>
  );
}

export default MenuCategorized;
