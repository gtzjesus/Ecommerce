import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import videoBg from '/videos/taco.mp4';

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  position: absolute;
  font-size: var(--font-large);
  color: var(--color-white);
`;

const ButtonLayout = styled.div`
  position: absolute;
  justify-content: left;
`;

function Video() {
  return (
    <StyledVideo>
      <video src={videoBg} autoPlay loop muted />
      <Title>Hello world</Title>
      <ButtonLayout>
        <Button variation="third" size="small">
          visit menu
        </Button>
      </ButtonLayout>
    </StyledVideo>
  );
}

export default Video;
