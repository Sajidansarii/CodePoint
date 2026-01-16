import { useEffect, useRef, useState } from "react";
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

  const handleReactNavigation = () => {
    navigate('/Component/React/React-Pages')
    setIsMenuOpen(false);
    setactive('react');
  }

  
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


   useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <div className="bg-green-300 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-14">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold">CodePoint</div>

        {/* Hamburger - Mobile Only */}
        <button
          ref={buttonRef}
          className="md:hidden text-2xl p-2"
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
            {/* <li className={`hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4
              ${active === "" ? "bg-gray-600 text-white" : " "}`}
              >
              <i className="fa-brands fa-bootstrap"></i> Bootstrap
            </li> */}
            <li className={`hover:cursor-pointer hover:text-white hover:bg-gray-600 px-2 py-4
              ${active === "react" ? "bg-gray-600 text-white" : " "}`}
              onClick={handleReactNavigation}> 
              <i className="fa-brands fa-react"></i> React  
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-300 px-4 py-3 rounded-b-lg shadow-inner" ref={menuRef}>
          <ul className="space-y-2 text-sm font-semibold">
            <li
              className="hover:cursor-pointer hover:bg-gray-200"
              onClick={handleNavigation}>
              <i className="fa-brands fa-html5"></i> HTML
            </li>
            <li className="hover:cursor-pointer hover:bg-gray-200"
            onClick={handleCssNavigation}>
              <i className="fa-brands fa-css3"></i> CSS
            </li>
            <li className="hover:cursor-pointer hover:bg-gray-200"
            onClick={handleJSNavigation}>
              <i className="fa-brands fa-js"></i> JavaScript
            </li>
            {/* <li className="hover:cursor-pointer hover:bg-gray-200">
              <i className="fa-brands fa-bootstrap"></i> Bootstrap
            </li> */}
            <li className="hover:cursor-pointer hover:bg-gray-200"
            onClick={handleReactNavigation}>
              <i className="fa-brands fa-react"></i> React
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;