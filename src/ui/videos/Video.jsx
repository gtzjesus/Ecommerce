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
`;

const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
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
        controls="controls"
        preload="auto"
        autoPlay="autoPlay "
        loop
        muted
        playsInline={true}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <Description>
        <Title>world hellow</Title>
        <Button onClick={handleNavigate} variation="third" size="small">
          browse menu
        </Button>
      </Description>
    </StyledVideo>
  );
}

export default Video;
