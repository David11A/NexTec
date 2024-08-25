import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="relative w-full py-16 bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagencontac.png" 
          alt="Fondo" 
          className="w-full h-full object-cover"
        />
      
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 md:px-12 relative">

       
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Formulario de contacto */}
          <div className="bg-[#191a1b] p-8 rounded-lg shadow-xl w-full lg:w-1/2">
          
          <h1 className="text-4xl font-bold text-white text-center mb-4">Contáctanos</h1>
            <p className="text-gray-300 mb-6">
              Nuestro equipo está disponible para responder a todas sus preguntas. Contáctenos hoy y descubramos juntos cómo podemos impulsar su proyecto hacia adelante.
            </p>

            <div className="flex items-center mb-6">
              <p className="text-white mr-2">Nuestras redes sociales :</p>
              <div className="flex space-x-2">
                <a href="#" className="bg-white p-2 rounded-md hover:bg-purple-600 transition-colors">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-md hover:bg-purple-600 transition-colors">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-md hover:bg-purple-600 transition-colors">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-md hover:bg-purple-600 transition-colors">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div className="flex items-center bg-[#2c2d30] ">
                <span className="text-gray-400 px-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                <input type="text" placeholder="Nombre" className="w-full bg-transparent text-white p-2 focus:outline-none" />
              </div>
              <div className="flex items-center bg-[#2c2d30]">
                <span className="text-gray-400 px-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                <input type="email" placeholder="Correo" className="w-full bg-transparent text-white p-2 focus:outline-none" />
              </div>
              <textarea placeholder="Mensaje" rows="4" className="w-full bg-[#2c2d30] text-white p-2 focus:outline-none"></textarea>
              <button type="submit" className="w-full bg-purple-600 text-white py-2 hover:bg-purple-700 transition duration-300 transform -skew-x-12">
                <p className='skew-x-[14deg]'>ENVIAR</p>  
              </button>
            </form>     
          </div>
          
          {/* Contenedor de herramientas */}
          <div className=" p-8 rounded-lg shadow-xl w-full lg:w-1/2">
            <h2 className="text-3xl text-white mb-8 text-center">Nuestras herramientas</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <i className="devicon-react-original colored text-5xl"></i>
                <p className="text-white mt-2">React</p>
              </div>
              <div className="text-center">
                <i className="devicon-javascript-plain colored text-5xl"></i>
                <p className="text-white mt-2">JavaScript</p>
              </div>
              <div className="text-center">
                <i className="devicon-html5-plain colored text-5xl"></i>
                <p className="text-white mt-2">HTML5</p>
              </div>
              <div className="text-center">
                <i className="devicon-css3-plain colored text-5xl"></i>
                <p className="text-white mt-2">CSS3</p>
              </div>
              <div className="text-center">
                <i className="devicon-nodejs-plain colored text-5xl"></i>
                <p className="text-white mt-2">Node.js</p>
              </div>
              <div className="text-center">
                <i className="devicon-express-original colored text-5xl"></i>
                <p className="text-white mt-2">Express</p>
              </div>
              <div className="text-center">
                <i className="devicon-mongodb-plain colored text-5xl"></i>
                <p className="text-white mt-2">MongoDB</p>
              </div>
              <div className="text-center">
                <i className="devicon-postgresql-plain colored text-5xl"></i>
                <p className="text-white mt-2">PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;