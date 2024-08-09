import React from 'react';

const QuienesSomos = () => {
  return (
    <section className="q1 py-12 px-4 md:px-8" style={{ backgroundColor: '#232426', color: 'white' }}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-12 items-center">
          <div className="md:w-1/4  ">
            <div className="overflow-hidden ">
              <img src="/public/imgsec1.png" alt="Nextec app" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 px-11">
            <h2 className="text-3xl font-bold mb-4">¿Quienes somos en Nextec?</h2>
            <p className="mb-6">
              Nextec es una empresa dedicada al desarrollo de soluciones
              digitales innovadoras, especializada en el diseño y desarrollo de
              sitios web y aplicaciones móviles. Nuestro equipo de expertos
              combina creatividad y tecnología para crear experiencias
              digitales únicas que impulsan el crecimiento y la eficiencia de
              nuestros clientes.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded transform -skew-x-12">
                <span className="inline-block skew-x-12">Mas detallers ➜</span>
              </button>
              <div className='px-11'>      </div>
              <button className="bg-gray-700 text-white px-6 py-2 rounded flex items-center">
                Contactar <span className="ml-2">☏</span>
              </button>
        
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Nuestra Misión', content: 'Es empoderar a las empresas a través de soluciones tecnológicas de vanguardia, ayudándolas a alcanzar sus metas y a destacarse en un mercado digital en constante evolución.' },
            { title: 'Nuestra Visión', content: 'Vislumbramos un futuro donde cada empresa pueda aprovechar al máximo el potencial de la tecnología digital.' },
            { title: 'Nuestros Valores', content: ['✓ Transparencia', ' ✓ Innovación', '✓ Responsabilidad', '✓ Calidad', '✓ Colaboración'] }
          ].map((card, index) => (
            <div key={index} className="bg-zinc-900 overflow-hidden flex transform -skew-x-12 h-40">
 
  
              <div className="p-3 flex-1 skew-x-12">
                <h3 className="text-lg text-center  text-purple-500 mb-2">{card.title}</h3>
                {Array.isArray(card.content) ? (
                  <ul className="list-none pl-0 text-xs">
                    {card.content.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs">{card.content}</p>
                )}
              </div>
              <div className="w-1/4 overflow-hidden">
                <img src="/public/imagen1.png" alt={card.title} className=" w-full h-full object-cover skew-12 transform scale-110" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;