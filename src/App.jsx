import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './ui/app/Landing';
import Menu from './pages/menu/Menu';
import PageNotFound from './pages/notfound/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <GlobalStyles />
        <Routes>
          <Route element={<Landing />}>
            <Route index element={<Navigate replace to="/" />} />
          </Route>
          <Route path="menu" element={<Menu />}>
            <Route index element={<Navigate replace to="/menu" />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MenuProvider>
    </BrowserRouter>
  );
}
export default App;
