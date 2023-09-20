import Spinner from '../../ui/spinners/Spinner';
import useCategories from './useCategories';

function MenuCategorized({ item }) {
  const { image } = item;

  // GRAB CATEGORIES
  const { error: categoryError, isLoading: categoryLoading } = useCategories();

  // CALCULATE CATEGORY FOR EACH ITEM
  if (categoryLoading) return <Spinner />;

  // CHECK FOR ANY ERRORS
  if (categoryError) {
    console.log(categoryError);
  }

  // categories.filter((category) => category.name.includes(category.name));
  // console.log(categories);

  // console.log(item.category);
  // console.log(categories.map((name) => name));

  return (
    <div>
      <img src={image} />
    </div>
  );
}

export default MenuCategorized;
