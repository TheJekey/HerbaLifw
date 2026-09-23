import Home from './Components/Home';
import About from './Components/About';
import Result from './Components/Result';
import Testimonial from './Components/Testimonial';
import FQ from './Components/FQ';
import Footer from './Components/Footer';
import ResultsGallery from './Components/ResultsGallery';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  if (window.location.pathname === '/results') {
    return <ResultsGallery />
  }

  const scroll = new LocomotiveScroll();
  return (
    <div>
      <Home />
      <About />
      <Result />
      <Testimonial />
      <FQ />
      <Footer />
    </div>
  )
}

export default App