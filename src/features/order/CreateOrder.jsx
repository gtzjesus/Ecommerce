import { useSelector } from 'react-redux';
import { getBag } from '../bag/bagSlice';

function CreateOrder() {
  const bag = useSelector(getBag());
  console.log(bag);
  return <div></div>;
}

export default CreateOrder;
