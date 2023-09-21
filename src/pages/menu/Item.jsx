import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { useLocation } from 'react-router';
import Navigation from '../../ui/app/Navigation';

function Item() {
  // ACCESS QUERY
  const location = useLocation(); // React Hook
  // GRAB PATHNAME, ONLY INTERESTED IN THE ID
  const pathname = Number(location.pathname.split('/')[2].replace(':', '')) - 1;

  // GRAB ITEMS FROM MENU CONTEXT
  const { items } = useContext(MenuContext);

  // ACCESS ID INSIDE OBJECT

  // SORT ITEMS BY ID TO DISPLAY INDIVIDUAL COMPONENT
  function dynamicSort(property) {
    return function (a, b) {
      return a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    };
  }

  // STORE SORT COMM
  const sortedItems = items.sort(dynamicSort('id'));

  // CREATE ITEM OBJECT FROM THIS LIST
  const item = sortedItems;

  console.log(items);
  console.log(sortedItems);

  // RETURN INDIVIDUAL ITEM COMPONENT (FINALLY 😄)
  return (
    <>
      <Navigation />
      <div key={item[pathname].key}>
        <span>{item[pathname].id}</span>
        <img src={item[pathname].image} />
        <span>{item[pathname].name}</span>
        <span>{item[pathname].description}</span>
        <span>{item[pathname].category}</span>
        <span>{item[pathname].regularPrice}</span>
        <span>{item[pathname].discount}</span>
      </div>
    </>
  );
}

export default Item;
