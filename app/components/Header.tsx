const Header = () => {
    return (
      <header className="bg-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          {/* Logo */}
          <div className="mb-2">
            <img src="/logo.png" alt="LAGCCR Logo" className="h-60" />
          </div>
  
          {/* Navegación */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Inicio</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Servicios</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Equipo</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  