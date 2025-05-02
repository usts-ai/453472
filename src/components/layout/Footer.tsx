import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-8 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2 text-2xl">👨‍👩‍👧‍👦</span> FamilyTask
            </h3>
            <p className="text-gray-400 mb-4">
              Application mobile de gestion des corvées familiales, rendant l'organisation des tâches amusante et interactive pour toute la famille.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3, color: '#1DA1F2' }}
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3, color: '#E1306C' }}
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3, color: '#211F1F' }}
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ y: -3, color: '#EA4335' }}
              >
                <FaEnvelope size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 block"
                  whileHover={{ x: 5 }}
                >
                  Accueil
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 block"
                  whileHover={{ x: 5 }}
                >
                  Planificateur
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 block"
                  whileHover={{ x: 5 }}
                >
                  Récompenses
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 block"
                  whileHover={{ x: 5 }}
                >
                  Paramètres
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 block"
                  whileHover={{ x: 5 }}
                >
                  Aide & Support
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Télécharger</h3>
            <div className="space-y-3">
              <motion.a 
                href="#" 
                className="bg-black text-white rounded-lg px-4 py-2 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Télécharger sur</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a 
                href="#" 
                className="bg-black text-white rounded-lg px-4 py-2 flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Disponible sur</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>&copy; {currentYear} FamilyTask. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
