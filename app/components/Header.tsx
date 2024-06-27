const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="LAGCCR Logo" className="h-12" />
        </div>

        {/* Navegación */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Equipo
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
