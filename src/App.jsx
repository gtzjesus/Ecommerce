import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { MenuProvider } from './context/MenuContext';
import Landing from './ui/app/Landing';
import GlobalStyles from './styles/GlobalStyles';
import Menu from './pages/menu/Menu';
import PageNotFound from './pages/notfound/PageNotFound';

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
            <Route path="menu" element={<Menu />}>
              <Route index element={<Navigate replace to="/menu" />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </MenuProvider>
    </QueryClientProvider>
  );
}
export default App;
