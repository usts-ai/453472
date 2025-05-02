import React from 'react';
import { motion } from 'framer-motion';
import { familyMembers } from '../../data/tasks';

const FamilyProgress: React.FC = () => {
  // Trier les membres de la famille par nombre de points décroissant
  const sortedMembers = [...familyMembers].sort((a, b) => b.points - a.points);
  const maxPoints = Math.max(...sortedMembers.map(member => member.points));
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Classement familial</h3>
      
      <div className="space-y-5">
        {sortedMembers.map((member, index) => {
          const progressWidth = (member.points / maxPoints) * 100;
          const isFirst = index === 0;
          const rankColors = [
            'from-yellow-400 to-yellow-300', // 1er
            'from-gray-400 to-gray-300',     // 2e
            'from-amber-700 to-amber-600',   // 3e
            'from-blue-400 to-blue-300'      // 4e
          ];
          
          return (
            <motion.div 
              key={member.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center mb-2">
                <motion.div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-r ${rankColors[index]}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index + 1}
                </motion.div>
                <div className="ml-3 flex items-center">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-800">{member.name}</span>
                </div>
                <div className="ml-auto font-bold">
                  {member.points} pts
                </div>
              </div>
              
              <div className="h-2.5 bg-gray-200 rounded-full w-full">
                <motion.div 
                  className={`h-2.5 rounded-full bg-gradient-to-r ${isFirst ? 'from-blue-500 to-purple-500' : 'from-blue-400 to-blue-300'}`}
                  style={{ width: `${progressWidth}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progressWidth}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              
              {isFirst && (
                <motion.div 
                  className="absolute -right-2 -top-2 bg-yellow-400 text-yellow-900 text-xs p-1 rounded-full"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                >
                  🏆
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      <motion.button 
        className="w-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg font-medium"
        whileHover={{ scale: 1.02, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        whileTap={{ scale: 0.98 }}
      >
        Voir toutes les récompenses
      </motion.button>
    </div>
  );
};

export default FamilyProgress;
