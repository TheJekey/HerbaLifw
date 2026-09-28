import Home from './Components/Home';
import About from './Components/About';
import Result from './Components/Result';
import Testimonial from './Components/Testimonial';
import FQ from './Components/FQ';
import Footer from './Components/Footer';
import ResultsGallery from './Components/ResultsGallery';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';

const App = () => {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setPathname(path)
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    if (pathname.replace(/\/$/, '') === '/results') {
      return
    }

    const scroll = new LocomotiveScroll()
    return () => scroll.destroy()
  }, [pathname])

  if (pathname.replace(/\/$/, '') === '/results') {
    return <ResultsGallery onBack={() => navigate('/')} />
  }

  return (
    <div className="selection:bg-[#1D4E26] selection:text-[#fff]  ">
      <Home />
      <About />
      <Result onViewMore={() => navigate('/results')} />
      <FQ />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App