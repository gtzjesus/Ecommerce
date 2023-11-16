import styled from 'styled-components';

const Img = styled.img`
  width: var(--image-large);
`;
function FeaturedItem({ featuredItem }) {
  // TRANSFORM OBJECT INTO ARRAY to check for featured items
  const featuredArray = Object.values(featuredItem);
  console.log(featuredArray);

  // GRAB OUR featuredItem
  featuredItem = {
    id: featuredArray[0],
    image: featuredArray[1],
    totalPrice: featuredArray[2],
    name: featuredArray[3],
    description: featuredArray[4],
    category: featuredArray[5],
    featured: featuredArray[6],
  };

  return <Img src={featuredItem.image} />;
}

export default FeaturedItem;
