import styled from 'styled-components';
import Navigation from '../app/Navigation';

const Overlay = styled.div`
  height: var(--height-full-window);
  position: absolute;
  top: 0;
  left: 0;
  width: var(--width-full-window);
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
