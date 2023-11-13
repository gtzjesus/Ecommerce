import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import videoBg from '/videos/taco.mp4';
import { useNavigate } from 'react-router';

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;

  video::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

const Introduction = styled.div`
  margin: var(--margin-nav-height) 0 0 0;
  display: flex;
`;

const Description = styled.div`
  position: absolute;
  bottom: var(--margin-xlarge);
  gap: var(--gap-small);
  right: 0;
  left: 0;
  text-align: center;
  align-items: center;
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
    <>
      <Introduction>
        <Title>world hello</Title>
      </Introduction>
      <StyledVideo>
        <video autoPlay="autoPlay " loop muted playsInline={true}>
          <source src={videoBg} type="video/mp4" />
        </video>
      </StyledVideo>

      <Description>
        <Title>no salsa, no taco</Title>
        <Button onClick={handleNavigate} variation="third" size="small">
          browse menu
        </Button>
      </Description>
    </>
  );
}

export default Video;
