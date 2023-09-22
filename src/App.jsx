import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { MenuProvider } from './context/MenuContext';
import Landing from './ui/app/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Menu from './pages/menu/Menu';
import PageNotFound from './pages/notfound/PageNotFound';
import Item from './pages/menu/Item';
import { Toaster } from 'react-hot-toast';
import Faves from './pages/faves/Faves';

// REACT QUERY INTEGRATION
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <MenuProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Landing />}>
              <Route index element={<Navigate replace to="/" />} />
            </Route>
            <Route path="menu" element={<Menu />} />
            <Route path="/menu/:id" element={<Item />} />
            <Route path="/faves" element={<Faves />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

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
              backgroundColor: 'var(--background-primary)',
              color: 'var(--color-red)',
            },
          }}
        />
      </MenuProvider>
    </QueryClientProvider>
  );
}
export default App;
