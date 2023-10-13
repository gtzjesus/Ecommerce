import styled from 'styled-components';
import Navigation from '../app/Navigation';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--width-full-window);
  min-height: var(--height-filled-window);

  background-color: var(--background-primary);
  z-index: var(--z-top);
`;

function Modal({ children }) {
  return (
    <Overlay>
      <Navigation />
      {children}
    </Overlay>
  );
}

export default Modal;
