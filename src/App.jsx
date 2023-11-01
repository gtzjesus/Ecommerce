import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MenuProvider } from './context/MenuContext';
import Landing from './ui/app/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Menu from './pages/menu/Menu';
import PageNotFound from './pages/notfound/PageNotFound';
import Item from './pages/menu/Item';
import { Toaster } from 'react-hot-toast';
import Faves from './pages/faves/Faves';
import Checkout from './pages/checkout/Checkout';

import { useEffect } from 'react';
import ProtectedRoute from './ui/routes/ProtectedRoute';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// CREATE ROUTER FROM REACT ROUTER DOM (PAGES)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/menu/:itemId',
    element: <Item />,
  },
  {
    path: '/faves',
    element: <Faves />,
  },
  {
    path: '/checkout',
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  // LOAD ALL WEBPAGES ON TOP AUTO
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <MenuProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 4000,
            },
            style: {
              fontSize: '15px',
              maxWidth: '150px',
              padding: '6px 14px',

              backgroundColor: 'var(--color-red)',
              color: 'var(--background-tile)',
            },
          }}
        />
      </MenuProvider>
    </QueryClientProvider>
  );
}
export default App;
