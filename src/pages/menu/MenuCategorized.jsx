import Spinner from '../../ui/spinners/Spinner';
import useCategories from './useCategories';

function MenuCategorized({ item, category }) {
  // GRAB CATEGORIES
  const { error: categoryError, isLoading: categoryLoading } = useCategories();

  // GRAB CURRENTLY SELECTED CATEGORY

  // DECONSTRUCT THE OBJECT TO OUR LIKING
  const { image } = item;

  // DECONSTRUCT THE OBJECT TO OUR LIKING
  // const { name } = category;

  // CALCULATE CATEGORY FOR EACH ITEM
  if (categoryLoading) return <Spinner />;

  // CHECK FOR ANY ERRORS
  if (categoryError) {
    console.log(categoryError);
  }

  // CREATE VARIABLES TO COMPARE
  const pureItem = item.category;
  const pureCategory = category.name;

  console.log(pureItem);
  console.log(pureCategory);

  return <div>{pureItem === pureCategory ? <img src={image} /> : null}</div>;
}

export default MenuCategorized;
