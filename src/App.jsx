import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './ui/app/Navigation';
import Menu from './pages/menu/Menu';
import MenuItem from './pages/menu/MenuItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route path="menu" element={<Menu />} />
          <Route path="menu/:itemId" element={<MenuItem />} />
          <Route index element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
