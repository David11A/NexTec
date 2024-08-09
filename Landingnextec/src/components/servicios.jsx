import React, { useState } from 'react';
import './servicios.css';

const Servicios = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      title: "Desarrollo Web",
      image: "/imagen1.png"
    },
    {
      title: "Desarrollo Mobil",
      image: "/imagen1.png"
    },
    {
      title: "Desarrollo y Mantenimiento de API",
      image: "/imagen1.png"
    }
  ];

  return (
    <section className="bg-[#865BCE] text-white p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Desarrollo Web</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Creación de sitios web a medida, adaptados a las necesidades específicas de cada cliente, Implementación de soluciones de comercio electrónico para negocios de todos los tamaños, gestión de inventarios y experiencia de compra optimizada.</li>
            <li>Diseño atractivo y funcional que garantiza una experiencia de usuario fluida y atractiva en todos los dispositivos. Desarrollo Back-End y APIs</li>
            <li>Estrategias SEO para mejorar la visibilidad y el ranking en motores de búsqueda, atrayendo más tráfico orgánico a su sitio web.</li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded parallelogram">
              <span className="skew-fix">Mas detallers &gt;</span>
            </button>
            <button className="bg-white text-green-500 px-4 py-2 rounded flex items-center">
              <span className="mr-2">Contactar para este servicio</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="service-cards-container">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${activeCard === index ? 'active' : ''}`}
                onClick={() => setActiveCard(index)}
              >
                <div className="service-card-content">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="service-card-title">
                    <h4 className="text-lg font-semibold">{service.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="service-pagination mt-4">
            {services.map((_, index) => (
              <span 
                key={index} 
                className={`pagination-item ${activeCard === index ? 'active' : ''}`}
                onClick={() => setActiveCard(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="company-policies mt-8 parallelogram">
        <div className="skew-fix">
          <h3 className="text-xl font-bold mb-2">Nextec</h3>
          <p>Trabajamos en estrecha colaboración con nuestros clientes. Garantizamos la confidencialidad y seguridad de la información de nuestros clientes y entregar proyectos a tiempo y dentro del presupuesto acordado.</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;