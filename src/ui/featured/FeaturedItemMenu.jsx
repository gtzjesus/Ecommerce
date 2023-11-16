import FeaturedItem from './FeaturedItem';

function FeaturedItemMenu({ item }) {
  // TRANSFORM OBJECT INTO ARRAY to check for featured items
  const arrayItem = Object.values(item);
  // CREATE empty array TO STORE FEATURED ITEMS
  let featuredArray = [];
  // GRAB FEATURED ITEMS FROM HERE
  // 9 === featured in arrayList
  if (arrayItem[9] === true) {
    featuredArray = arrayItem;
  }
  // GRAB OUR featuredItem
  const featuredItem = {
    id: featuredArray[0],
    image: featuredArray[7],
    totalPrice: featuredArray[2],
    name: featuredArray[4],
    description: featuredArray[5],
    category: featuredArray[8],
    featured: featuredArray[9],
  };

  return (
    <div>
      <FeaturedItem featuredItem={featuredItem} />
    </div>
  );
}

export default FeaturedItemMenu;
