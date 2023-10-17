import { useState } from 'react';

// ITEMS local storage
let items = [];

// SET THE VALUE TO local storage
export function setStorageValue(key, newItem) {
  // SET TO local bag
  localStorage.setItem(key, JSON.stringify(newItem));
  // KEEP ITEM into NEW ARRAY ITEMS
  items.push(newItem);
}
// GET THE VALUE FROM local storage
export function getStorageValue(key, defaultValue) {
  // GRAB LOCAL STORAGE BAG
  const saved = localStorage.getItem(key);
  // CONVERT data-type INTO OBJECT
  const initialValue = JSON.parse(saved);
  // CONVERT OBJECT INTO ARRAY (to map)
  console.log(items);

  return initialValue || defaultValue;
}

// CUSTOM HOOK FOR getting THE STORED VALUE IN cache
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  localStorage.setItem(key, JSON.stringify(value));
  return [value, setValue];
};
