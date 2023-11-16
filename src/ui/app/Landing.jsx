import Home from '../../pages/home/Home';
import Featured from '../featured/Featured';
import Navigation from '../navigation/Navigation';

function Landing() {
  return (
    <>
      <Navigation></Navigation>
      <Home />
      <Featured />
    </>
  );
}
export default Landing;
