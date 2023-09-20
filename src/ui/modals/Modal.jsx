// import { createPortal } from 'react-dom';
// import { HiXMark } from 'react-icons/hi2';
import styled, { keyframes } from 'styled-components';
// ANIMATION
const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const StyledModal = styled.div`
  animation: ${slideIn} 0.25s cubic-bezier(0.4, 0, 0.2, 1) both;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* background: url(images/backgrounds/menu-categorized-background.png) no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
  background-color: #ede1d1;

  border-radius: 1rem;
  width: 100%;
  height: 100%;

  box-shadow: 3rem;
  transition: all 0.5s;
`;

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

function Modal({ children }) {
  return (
    <StyledModal>
      <div>{children}</div>
    </StyledModal>
  );
}

export default Modal;
