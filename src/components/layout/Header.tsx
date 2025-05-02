import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaBell, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#007BFF] to-[#40E0D0] p-4 text-white z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="mr-2 text-3xl font-bold"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
          >
            👨‍👩‍👧‍👦
          </motion.div>
          <h1 className="text-xl font-bold">FamilyTask</h1>
        </motion.div>

        {/* Navigation pour desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <motion.a 
            href="#" 
            className="hover:text-blue-200 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Accueil
          </motion.a>
          <motion.a 
            href="#" 
            className="hover:text-blue-200 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Planificateur
          </motion.a>
          <motion.a 
            href="#" 
            className="hover:text-blue-200 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Récompenses
          </motion.a>
          <motion.div 
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBell size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              3
            </span>
          </motion.div>
          <motion.div 
            className="h-8 w-8 rounded-full bg-white text-blue-500 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser size={16} />
          </motion.div>
        </nav>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <motion.div 
          className="absolute top-full left-0 right-0 bg-gradient-to-b from-[#007BFF] to-[#40E0D0] shadow-lg md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 px-4 py-2">
              Accueil
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 px-4 py-2">
              Planificateur
            </a>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300 px-4 py-2">
              Récompenses
            </a>
            <div className="flex items-center space-x-4 px-4 py-2">
              <div className="relative cursor-pointer">
                <FaBell size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </div>
              <div className="h-8 w-8 rounded-full bg-white text-blue-500 flex items-center justify-center cursor-pointer">
                <FaUser size={16} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
