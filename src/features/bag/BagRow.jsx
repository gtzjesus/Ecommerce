import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const StyledRow = styled.div`
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-primary);
  padding: var(--padding-medium);
  margin: var(--margin-medium) 0;

  border: 0.1rem solid var(--color-red);
  height: 12.5vh;
  cursor: pointer;
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--padding-small);
`;

const Img = styled.img`
  width: var(--image-small);
`;

const Quantity = styled.span`
  font-size: var(--font-xsmall);
  color: var(--color-red);
`;

const Price = styled.span`
  color: var(--color-red);
  font-size: var(--font-small);
`;

const Name = styled.span`
  font-size: var(--font-small);
`;

const Hamburger = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-xsmall);
  color: var(--color-red);
`;

function BagRow({ item }) {
  // DECONSTRUCT ITEM
  console.log(item);
  return (
    <>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/horchata.png" />
          <Name>Horchata</Name>
          <Quantity>x4</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$4.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/pan.png" />
          <Name>pan de dios</Name>
          <Quantity>x1</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$7.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/alambre-doggo.png" />
          <Name>alambre</Name>
          <Quantity>x2</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$19.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/tacos-alpastor.png" />
          <Name>asada</Name>
          <Quantity>x7</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$19.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/alambre-doggo.png" />
          <Name>doggo</Name>
          <Quantity>x4</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$19.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/alambre-doggo.png" />
          <Name>doggo</Name>
          <Quantity>x4</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$19.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
      <StyledRow>
        <StyledDescription>
          <Img src="/images/items/alambre-doggo.png" />
          <Name>doggo</Name>
          <Quantity>x4</Quantity>
        </StyledDescription>
        <StyledDescription>
          <Price>$19.99</Price>
          <Hamburger>
            <AiOutlineClose />
          </Hamburger>
        </StyledDescription>
      </StyledRow>
    </>
  );
}

export default BagRow;
