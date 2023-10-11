import styled from 'styled-components';
import { useUser } from '../../features/authentication/useUser';
import Spinner from '../spinners/Spinner';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const FullPage = styled.div`
  height: var(--height-filled-window);
  background-color: var(--background--tile);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // HOOK FOR NAVIGATION
  const navigate = useNavigate();
  // LOAD THE AUTHENTICATED USER
  const { isAuthenticated, isLoading } = useUser();

  // IF no AUTHENTICATED USER, DISPLAY LOGIN FORM
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
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
