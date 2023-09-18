import { useItems } from '../../pages/menu/useItems';

function AppLanding() {
  const { data: items, error } = useItems();
  if (error) {
    console.log(error);
  }
  return <div>{items.map((item) => console.log(item))}</div>;
}
export default AppLanding;
