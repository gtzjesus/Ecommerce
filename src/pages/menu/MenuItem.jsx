import styled from 'styled-components';

const StyledMenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;

function MenuItem() {
  // DECONSTRUCT ITEM OBJECT TO GRAB ALL VALUES
  //   const { image, name, description, quantity, regularPrice, discount, tag } =
  //     item;
  // LOGGING ITEM AND CATEGORY
  //   console.log(item, category);
  // IF LOADING DATA RETURN OUR SPINNER LOADER
  //   if (isLoading) return <Spinner />;
  // THROW ANY ERRORS IN THE PROCESS OF GRABBING
  //   if (error) throw new Error('Error grabbing items');
  return <StyledMenuItem>hi</StyledMenuItem>;
}

export default MenuItem;
