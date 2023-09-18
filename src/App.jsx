import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './ui/app/Navigation';
import Menu from './pages/menu/Menu';
import MenuItem from './pages/menu/MenuItem';
import { QueryClient, QueryClientProvider } from 'react-query';

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
          <Route element={<Navigation />}>
            <Route path="menu" element={<Menu />} />
            <Route path="menu/:itemId" element={<MenuItem />} />
            <Route index element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
