import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { useLocation } from 'react-router';
import Navigation from '../../ui/app/Navigation';

function Item() {
  // ACCESS QUERY
  const location = useLocation(); // React Hook
  // GRAB PATHNAME, ONLY INTERESTED IN THE ID
  const pathname = Number(location.pathname.split('/')[2].replace(':', ''));

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
  // MAP ARRAY TO GRAB ALL IDs
  const itemList = sortedItems.map((item) => item.id);
  // CHECK ARRAY LIST FOR SAME PATHNAME ID
  const matchFound = itemList.find((element) => element === pathname);
  // if (!matchFound) throw new Error('No Match Found');

  const item = items.map((item) => item);

  console.log(matchFound);
  console.log(item);

  // RETURN INDIVIDUAL ITEM COMPONENT (FINALLY 😄)
  return (
    <div>
      <Navigation />
      {matchFound ? (
        <div key={item.key}>
          <span>{item.id}</span>
          <img src={item.image} />
          <span>{item.name}</span>
          <span>{item.description}</span>
          <span>{item.category}</span>
          <span>{item.regularPrice}</span>
          <span>{item.discount}</span>
        </div>
      ) : (
        'No item here'
      )}
    </div>
  );
}

export default Item;
