import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#140d09]/80 backdrop-blur-md border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-black tracking-wide text-[#d4a373] cursor-pointer hover:scale-105 transition duration-300">
          Coffee Crumbs ☕
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">

          <a href="#home">
            <li className="hover:text-[#d4a373] hover:-translate-y-1 cursor-pointer transition duration-300">
              Home
            </li>
          </a>
           
          <a href="#about">
            <li className="hover:text-[#d4a373] hover:-translate-y-1 cursor-pointer transition duration-300">
              About
            </li>
          </a>

          <a href="#menu">
            <li className="hover:text-[#d4a373] hover:-translate-y-1 cursor-pointer transition duration-300">
              Menu
            </li>
          </a>

          <a href="#gallery">
            <li className="hover:text-[#d4a373] hover:-translate-y-1 cursor-pointer transition duration-300">
              Gallery
            </li>
          </a>
           
          <a href="#booking">
            <li className="hover:text-[#d4a373] hover:-translate-y-1 cursor-pointer transition duration-300">
              Booking
            </li>
          </a>
       
          <a href="#contact">
            <li className="hover:text-[#d4a373] hover:-translate-y-1 cursor-pointer transition duration-300">
              Contact
            </li>
          </a>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <X size={32} /> : <Menu size={32} />}

        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1a120d] border-t border-white/10"
          >

            <ul className="flex flex-col items-center gap-8 py-10 text-lg font-medium">

              <a href="#home" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-[#d4a373] transition duration-300">
                  Home
                </li>
              </a>

              <a href="#about" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-[#d4a373] transition duration-300">
                  About
                </li>
              </a>

              <a href="#menu" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-[#d4a373] transition duration-300">
                  Menu
                </li>
              </a>

              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-[#d4a373] transition duration-300">
                  Gallery
                </li>
              </a>

              <a href="#booking" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-[#d4a373] transition duration-300">
                  Booking
                </li>
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                <li className="hover:text-[#d4a373] transition duration-300">
                  Contact
                </li>
              </a>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );
};

export default Navbar;