import styled from 'styled-components';
import Navigation from '../../ui/app/Navigation';
import { useDispatch } from 'react-redux';
import { getFaves } from '../../features/bag/bagSlice';

const StyledFaves = styled.div`
  display: flex;
`;
function Faves() {
  // CREATE DISPATCH to call actions
  const dispatch = useDispatch();
  // GRAB favesItems FROM LOCAL STORAGE (if any)
  const faves = dispatch(getFaves);
  console.log(faves);
  return <Navigation />;
}

export default Faves;
