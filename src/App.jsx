import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLanding from './ui/app/AppLanding';
import Menu from './pages/menu/Menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageNotFound from './pages/notfound/PageNotFound';
import MenuCategorized from './pages/menu/MenuCategorized';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLanding />}>
            <Route index element={<Navigate replace to="/" />} />
          </Route>
          <Route path="menu" element={<Menu />}>
            <Route path="menu/:itemId" element={<MenuCategorized />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
