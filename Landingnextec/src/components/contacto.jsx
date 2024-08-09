import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="relative h-screen">
      <img src="/imagen1.png" alt="Fondo" className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 flex items-center justify-start pl-20">
        <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg max-w-md w-full">
          <h2 className="text-5xl font-bold text-white mb-4">Contáctanos</h2>
          <p className="text-gray-300 mb-6">
            Nuestro equipo está disponible para responder a todas sus preguntas. Contáctenos hoy y descubramos juntos cómo podemos impulsar su proyecto hacia adelante.
          </p>
          
          <p className="text-white mb-4">Nuestras redes sociales :</p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="bg-purple-600 p-2 rounded-md">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.97 15.97l-3.42-3.42v-5.3h-2.1v5.3l-3.42 3.42 1.41 1.41L12 16.83l2.54 2.54z"/></svg>
            </a>
            <a href="#" className="bg-white p-2 rounded-md">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="bg-white p-2 rounded-md">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="bg-white p-2 rounded-md">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
          </div>
          
          <form className="space-y-4">
            <div className="flex items-center bg-gray-800 rounded-md">
              <span className="text-gray-400 px-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              <input type="text" placeholder="Nombre" className="w-full bg-transparent text-white p-2 focus:outline-none" />
            </div>
            <div className="flex items-center bg-gray-800 rounded-md">
              <span className="text-gray-400 px-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </span>
              <input type="email" placeholder="Correo" className="w-full bg-transparent text-white p-2 focus:outline-none" />
            </div>
            <textarea placeholder="Mensaje" rows="4" className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none"></textarea>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 transform skew-x-12">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;