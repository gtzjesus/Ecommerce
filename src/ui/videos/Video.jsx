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
      {/* <video
        src={videoBg}
        loop
        muted={true}
        autoPlay
        playsInline={true}
        id="video"
        type="video/mp4"
      /> */}
      <video
        className="video-player"
        controls="controls"
        preload="auto"
        autoPlay="autoPlay "
        loop
        muted
        playsInline={true}
      >
        <source src={videoBg} type="video/mp4" />
      </video>
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
