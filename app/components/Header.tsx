// components/Header.js

const Header = () => {
    return (
      <header className="bg-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          {/* Logo */}
          <div className="mb-2">
            <img src="/logo.png" alt="LAGCCR Logo" className="h-60" />
          </div>
  
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-800 hover:text-teal-500 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-teal-500 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-teal-500 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-teal-500 transition-colors duration-300">Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-teal-500 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  