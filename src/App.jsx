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
    path: '/menu/:itemId',
    element: <Item />,
  },
  {
    path: '/faves',
    element: <Faves />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
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
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              margin: '6rem 0 0 0',

              backgroundColor: 'var(--background-tile)',
              color: 'var(--color-red)',
            },
          }}
        />
      </MenuProvider>
    </QueryClientProvider>
  );
}
export default App;
