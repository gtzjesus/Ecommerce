import { createContext } from 'react';
import useItems from '../pages/menu/useItems';
import useCategories from '../pages/menu/useCategories';
// CREATE CONTEXT API
const MenuContext = createContext();
function MenuProvider({ children }) {
  // CUSTOM HOOK TO GRAB ITEMS + CATEGORIES
  const { items, isLoading, error } = useItems();
  const { categories } = useCategories();

  return (
    <MenuContext.Provider
      value={{
        items,
        categories,
        isLoading,
        error,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
