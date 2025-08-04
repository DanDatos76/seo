import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './components/Map';

import TestimonialsSlider from './components/TestimonialsSlider';
import Hero from  './components/Hero';
import Services  from './components/Services';
import FeaturedSlider from './components/FeaturedSlider';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';
import Logos from './components/logos'
import Contact from './components/Contact'



function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
             
              <Hero />
              <Services />
              <Map />
              <FeaturedSlider />
              <ProcessSection />
              <Footer />
            </>
          } 
        />
        {/* Otras rutas si querés */}
      </Routes>
    </Router>
  );
}


export default App;
