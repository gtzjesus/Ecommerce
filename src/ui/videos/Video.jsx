import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import videoBg from '/videos/taco.mp4';
import { useNavigate } from 'react-router';

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // COVER THE FULL SCREEN OF EVERY DEVICE
  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;

  // REMOVE CONTROLS DISPLAY AT BEGINNING OF video
  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

const Introduction = styled.div`
  // DISPLAY AS columns
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: var(--margin-nav-height) 0 0 0;
  top: var(--margin-xlarge);
  // ALIGN MIDDLE
  right: 0;
  left: 0;
  text-align: center;
  align-items: center;
`;

const Description = styled.div`
  // DISPLAY AS ROWS
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: var(--margin-xlarge);
  gap: var(--gap-small);

  // ALIGN MIDDLE
  right: 0;
  left: 0;
  text-align: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: var(--font-large);
  color: var(--color-white);
`;

const Subtitle = styled.span`
  font-size: var(--font-small);
  color: var(--color-white);
`;

const ActualVideo = styled.div`
  background-image: url('/images/backgrounds/loading.gif');
  background-repeat: no-repeat;
  background-position: center;
  color: var(--color-red);
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
    <>
      <StyledVideo>
        <ActualVideo>
          <video autoPlay="autoPlay " loop muted playsInline={true}>
            <source src={videoBg} type="video/mp4" />
          </video>
        </ActualVideo>
      </StyledVideo>
      <Introduction>
        <Title>world hello</Title>
        <Subtitle>treat yourself to our limited time carnitas</Subtitle>
      </Introduction>
      <Description>
        <Title>hungry for tacos? </Title>
        <Button onClick={handleNavigate} variation="third" size="small">
          browse menu
        </Button>
      </Description>
    </>
  );
}

export default Video;
