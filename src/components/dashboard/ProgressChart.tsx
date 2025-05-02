import React from 'react';
import { motion } from 'framer-motion';
import { weeklyProgress } from '../../data/tasks';

const ProgressChart: React.FC = () => {
  const maxValue = Math.max(...weeklyProgress.map(day => day.total));
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Progression hebdomadaire</h3>
      
      <div className="relative h-64">
        <div className="flex justify-between items-end h-full">
          {weeklyProgress.map((day, index) => {
            const completedHeight = (day.completed / maxValue) * 100;
            const totalHeight = (day.total / maxValue) * 100;
            const isToday = index === 3; // Jeudi (pour la démo)
            
            return (
              <div key={day.day} className="flex flex-col items-center flex-1 space-y-2">
                <div className="relative w-full flex justify-center">
                  {/* Barre totale */}
                  <motion.div 
                    className="w-7 rounded-t-md bg-gray-200"
                    style={{ height: `${totalHeight}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${totalHeight}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    {/* Barre complétée */}
                    <motion.div 
                      className="w-full rounded-t-md bg-blue-500 absolute bottom-0"
                      style={{ height: `${completedHeight}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${completedHeight}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </motion.div>
                </div>
                
                <div className={`text-xs font-medium ${isToday ? 'text-blue-600' : 'text-gray-500'}`}>
                  {day.day}
                </div>
                
                {isToday && (
                  <motion.div 
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    Aujourd'hui
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Ligne horizontale */}
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gray-300" />
      </div>
      
      <div className="mt-4 flex justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
          <span className="text-xs text-gray-600">Complétées</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-200 mr-2" />
          <span className="text-xs text-gray-600">En attente</span>
        </div>
        <motion.div 
          className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          65% complété cette semaine
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressChart;
