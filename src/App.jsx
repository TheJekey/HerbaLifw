import Home from './Components/Home';
import About from './Components/About';
import Result from './Components/Result';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const scroll = new LocomotiveScroll();
  return (
    <div>
      <Home />
      <About />
      <Result />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App