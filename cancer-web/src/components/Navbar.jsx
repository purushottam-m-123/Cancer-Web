import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setOpen(!open);
  
const goToLogin = () => {
  navigate("/login");
};

const handleLogin = () => {
  navigate("/login");
};

  const newLocal = "relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white bg-linear-to-r from-pink-500 to-rose-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-pink-500/50 hover:scale-105";
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-15 h-15 rounded-full shadow-sm"
          />
          <h1 className="text-xl font-bold text-pink-600">
            Cancer Awareness
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-pink-600">
          </a>
          <Link
  to="/" 
  className="px-6 py-2 rounded-full bg-pink-100 text-gray-700 font-medium hover:bg-pink-200 transition-all duration-300 shadow-sm"
> Home
</Link>

          <a href="#quotes" className="text-gray-700 hover:text-pink-600">
            Quotes
          </a>

          <a href="#contact" className="text-gray-700 hover:text-pink-600">
            Contact
          </a>
           <Link to="/about" className="navLink">About</Link>

         {/* Better Login Button */}
          <button
            onClick={goToLogin}   
          className={newLocal}
>
  <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 transition-all duration-300"></span>
  Login
</button>

</div>
        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#home"
            className="block px-6 py-3 text-gray-700 hover:bg-pink-50"
          >
            Home
          </a>

          <a
            href="#quotes"
            className="block px-6 py-3 text-gray-700 hover:bg-pink-50"
          >
            Quotes
          </a>

          <a
            href="#contact"
            className="block px-6 py-3 text-gray-700 hover:bg-pink-50"
          >
            Contact
          </a>

          <button
            onClick={handleLogin}
            className="w-full bg-pink-600 text-white px-6 py-3 hover:bg-pink-700"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}