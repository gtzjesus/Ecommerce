import styled from 'styled-components';
import { useUser } from '../../features/authentication/useUser';
import Spinner from '../spinners/Spinner';
import { useEffect } from 'react';
import Nav from '../sidebars/Nav';

const FullPage = styled.div`
  height: var(--height-filled-window);
  background-color: var(--background--tile);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // LOAD THE AUTHENTICATED USER
  const { isAuthenticated, isLoading } = useUser();

  // IF no AUTHENTICATED USER, REDIRECT TO /Home
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        <Nav />;
      }
    },
    [isAuthenticated, isLoading]
  );

  // WHILE LOADING, SHOW SPINNER
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // IF yes AUTHENTICATED USER, RENDER APP

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
