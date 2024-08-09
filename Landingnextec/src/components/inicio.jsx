import React, { useState } from 'react';
import './inicio.css';
import QuienesSomos from './quienessomos';
import Servicios from './servicios';
import Contactos from './contacto';


const Inicio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="fixed-header text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-4xl">Nextec</h1>
          <nav className={`nav-links ${menuOpen ? 'block' : 'hidden'} md:flex space-x-6`}>
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#quienes-somos" className="nav-link">Quienes somos</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-purple-400">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <button className="md:hidden text-white ml-4" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      <section className="banner-section relative">
        <img src="/banner.png" alt="Banner" className="w-full object-cover" style={{ height: '95vh' }} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="banner-title text-6xl md:text-9xl font-bold mb-0 mt-11">Nextec</h1>
            <p className="banner-subtitle text-xl md:text-2xl mb-8">Transforma tu negocio al mundo digital</p>
            <div className="mb-8">
              <span className="text-lg md:text-xl">Desarrollo web</span>
              <span className="mx-4">|</span>
              <span className="text-lg md:text-xl">Desarrollo móvil</span>
            </div>
            <button className="parallelogram-button">
              Contactar
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
          <p className="mb-2">React js / React native / Angular / Wordpress / Node</p>
          <p>MySQL / PostgreSQL / Angular / Wordpress</p>
        </div>
      </section>
      <QuienesSomos/>
      <Servicios/>
      <Contactos/>   
      
    </div>
  
  );
};

export default Inicio;
