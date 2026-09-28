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
    <div className="selection:bg-[#1D4E26] selection:text-[#fff]  ">
      <Home />
      <About />
      <Result />
      <FQ />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App