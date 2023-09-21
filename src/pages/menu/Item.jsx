import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { useLocation } from 'react-router';
import Navigation from '../../ui/app/Navigation';

function Item() {
  // ACCESS QUERY
  const location = useLocation(); // React Hook
  // GRAB PATHNAME
  const pathname = location.pathname.replace().split('/')[2];

  console.log(pathname);
  // GRAB ITEMS FROM MENU CONTEXT
  const { items } = useContext(MenuContext);
  console.log(items);

  // console.log(items);
  // RETURN INDIVIDUAL ITEM COMPONENT (FINALLY 😄)
  return (
    <div>
      <Navigation />
      {}
    </div>
  );
}

export default Item;
