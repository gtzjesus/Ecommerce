import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import videoBg from '/videos/taco.mp4';
import { useNavigate } from 'react-router';

const StyledVideo = styled.div`
  display: flex;
  height: var(--height-filled-window);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: black solid 10px;
  z-index: var(--z-top);
`;

const Title = styled.span`
  font-size: var(--font-large);
  color: var(--color-white);
`;

function Video() {
  // GRAB FOR NAVIGATION HOOK
  const navigate = useNavigate();
  // FUNCTION USED TO NAVIGATE to menu
  function handleNavigate() {
    // NAVIGATE
    navigate('/menu');
  }
  return (
    <StyledVideo>
      <video
        className="video-player"
        controls="false"
        preload="auto"
        autoPlay="autoPlay "
        loop
        muted
        playsInline={true}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <Description>
        <Title>no salsa, no taco</Title>
        <Button onClick={handleNavigate} variation="third" size="small">
          browse menu
        </Button>
      </Description>
    </StyledVideo>
  );
}

export default Video;
