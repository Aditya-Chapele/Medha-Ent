import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Aluminium from './components/Products/Aluminium';
import Brass from './components/Products/Brass';
import Copper from './components/Products/Copper';
import Steel from './components/Products/Steel';



import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Medha Enterprises");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/aluminium" element={<Aluminium />} /> 
            <Route path="/brass" element={<Brass />} /> 
            <Route path="/steel" element={<Steel />} /> 
            <Route path="/copper" element={<Copper />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
