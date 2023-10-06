import { useSelector } from 'react-redux';
import { getBag } from '../bag/bagSlice';

function CreateOrder() {
  const bag = useSelector(getBag());
  return <div></div>;
}

export default CreateOrder;
