import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#232426] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Nextec</h2>
        </div>
        
        {/* Center Section - Social Media Icons */}
        <div className="flex space-x-4 mb-6">
  <a href="#" className="bg-purple-600 p-2 rounded-md">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.97 15.97l-3.42-3.42v-5.3h-2.1v5.3l-3.42 3.42 1.41 1.41L12 16.83l2.54 2.54z"/>
    </svg>
  </a>
  <a href="#" className="bg-white p-2 rounded-md">
    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
  </a>
  <a href="#" className="bg-white p-2 rounded-md">
    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
    </svg>
  </a>
  <a href="#" className="bg-white p-2 rounded-md">
    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
    </svg>
  </a>
</div>

        
        {/* Right Section - Links */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-right">
          <span className="text-lg mb-2 md:mb-0 md:mr-4">Enlaces Rápidos:</span>
          <nav className="flex space-x-4">
            <a href="#" className="text-white hover:underline">Inicio</a>
            <a href="#" className="text-white hover:underline">Quiénes somos</a>
            <a href="#" className="text-white hover:underline">Servicios</a>
            <a href="#" className="text-white hover:underline">Contacto</a>
          </nav>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 Nextec. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
