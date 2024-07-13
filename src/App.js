import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AppParallax from './AppParallax';
import StickParallax from './StickyParallax';
import HorizontalParallax from './HorizontalParallax';
import VerticalParallax from './VerticalParallax';

function App() {
  return (
    <>
      {/* <AppParallax /> */}
      {/* <StickParallax /> */}
      {/* <HorizontalParallax /> */}
      <VerticalParallax />
    </>
  );
}

export default App;
