import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setactive]= useState(null);

  const handleNavigation = () => {
    navigate("/Component/HTML-Section/HtmlPages");
    setIsMenuOpen(false); // close menu on navigation
    setactive("html");
  };

  const handleCssNavigation = () => {
    navigate('/Component/CSS-Section/CssPages')
    setIsMenuOpen(false); // close menu on navigation
    setactive("css");
  }

  
  const handleJSNavigation = () => {
    navigate('/Component/JavaScript-Section/JavaScriptPages')
    setIsMenuOpen(false); // close menu on navigation
    setactive("javascript");
  }

  return (
    <div className="bg-green-300 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Logo */}
        <div className="text-xl font-bold">CodePoint</div>

        {/* Hamburger - Mobile Only */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars"></i>
        </button> 

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex ml-10">
          <ul className="flex space-x-6 text-sm font-semibold">
            <li
              className={`hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4
                ${active === "html" ? "bg-gray-600 text-white":""}`}

              onClick={handleNavigation}>
              <i className="fa-brands fa-html5"></i> HTML5
            </li>
            <li className={`hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4
              ${active === "css" ? "bg-gray-600 text-white":""}`}
             onClick={handleCssNavigation}>
              <i className="fa-brands fa-css3"></i> CSS3
            </li>
            <li className={`hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4
             ${active === "javascript" ? "bg-gray-600 text-white" : " "}`}
            onClick={handleJSNavigation}>
              <i className="fa-brands fa-js"></i> JavaScript
            </li>
            <li className="hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4">
              <i className="fa-brands fa-bootstrap"></i> Bootstrap
            </li>
            <li className="hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4">
              <i className="fa-brands fa-react"></i> React  
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-300 px-4 py-2">
          <ul className="space-y-2 text-sm font-semibold">
            <li
              className="hover:cursor-pointer hover:bg-gray-200"
              onClick={handleNavigation}>
              <i className="fa-brands fa-html5"></i> HTML
            </li>
            <li className="hover:cursor-pointer hover:bg-gray-200">
              <i className="fa-brands fa-css3"></i> CSS
            </li>
            <li className="hover:cursor-pointer hover:bg-gray-200">
              <i className="fa-brands fa-js"></i> JavaScript
            </li>
            <li className="hover:cursor-pointer hover:bg-gray-200">
              <i className="fa-brands fa-bootstrap"></i> Bootstrap
            </li>
            <li className="hover:cursor-pointer hover:bg-gray-200">
              <i className="fa-brands fa-react"></i> React
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;