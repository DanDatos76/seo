// Tu archivo App.js CORREGIDO Y ESTRUCTURADO

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de componentes principales del layout
import Header from './components/Header';
import Footer from './components/Footer';

// Importación de componentes para la página de inicio
import Hero from './components/Hero';
import Services from './components/Services';
import Map from './components/Map';
import FeaturedSlider from './components/FeaturedSlider';
import ProcessSection from './components/ProcessSection';
import TestimonialsSlider from './components/TestimonialsSlider';

// Importación de las páginas completas
import Solutions from './components/Solutions';
import Tecnologia from './components/Tecnologia';
import Industr from './components/Industr';
import Contact from './components/Contact';
import About from './components/About';

// Para mantener App.js limpio, agrupamos los componentes de la página de inicio
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Map />
    <FeaturedSlider />
    <ProcessSection />
    <TestimonialsSlider />
  </>
);

function App() {
  return (
    <Router>
      {/* 1. Contenedor principal para aplicar Flexbox */}
      <div className="app-container">
        
        <Header /> {/* Se muestra siempre arriba */}
        
        {/* 2. Contenedor del contenido principal que se estirará */}
        <main className="main-content">
          <Routes>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={<HomePage />} />
            
            {/* Rutas para las otras páginas */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/technologies" element={<Tecnologia />} />
            <Route path="/industries" element={<Industr />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            
            {/* Puedes agregar más rutas aquí si es necesario */}
          </Routes>
        </main>
        
        {/* 3. El Footer se renderiza al final, fuera del contenido principal */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;