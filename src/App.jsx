import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/app/AppLayout';
import Menu from './pages/menu/Menu';
import MenuItem from './pages/menu/MenuItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/" />} />
        </Route>
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:itemId" element={<MenuItem />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
