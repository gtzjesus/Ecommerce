import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--width-full-window);
  background-color: var(--background-primary);
  z-index: var(--z-top);
`;

function Modal({ children }) {
  return <Overlay>{children}</Overlay>;
}

export default Modal;
