import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-tile);
  padding: var(--padding-xlarge);
  border: 0.25rem solid var(--color-red);
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TopDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: var(--gap-small);
`;

const Name = styled.span`
  font-size: var(--font-medium);
`;

const Img = styled.img`
  width: var(--image-large);
  margin: var(--padding-xlarge);
`;

const Price = styled.span`
  font-size: var(--font-small);
  color: var(--color-red);
`;

const Category = styled.span`
  font-size: var(--font-small);
  width: var(--width-description);
  text-align: center;
`;

function FeaturedItem({ item }) {
  // NAVIGATION react HOOK
  const navigate = useNavigate();
  const { id } = item;
  // TRANSFORM OBJECT INTO ARRAY to check for featured items
  const arrayItem = Object.values(item);
  // CREATE empty array TO STORE FEATURED ITEMS
  // HANDLE NAVIGATION
  function handleFeatured() {
    navigate(`/menu/${id}`);
  }

  let featuredArray = [];
  // GRAB FEATURED ITEMS FROM HERE ONLY RUN
  // 9 === featured in arrayList
  if (arrayItem[9] === true) {
    featuredArray = arrayItem;
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

    // RETURN ALL FEATURED ITEMS
    return (
      <StyledItemContainer onClick={handleFeatured}>
        <StyledDesc>
          <TopDisplay>
            <Name>{featuredItem.name}</Name>
            <Price>${featuredItem.totalPrice}</Price>
          </TopDisplay>
          <Img src={featuredItem.image} />
          <Category>{featuredItem.category}</Category>
        </StyledDesc>
      </StyledItemContainer>
    );
  }
}

export default FeaturedItem;
