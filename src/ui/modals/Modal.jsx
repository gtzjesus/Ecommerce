import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--width-full-window);
  min-height: var(--height-filled-window);
  background-color: var(--background-tile);
  z-index: var(--z-top);
  text-align: center;
`;

function Modal({ children }) {
  return <Overlay>{children}</Overlay>;
}

export default Modal;
