import React from 'react';
import { motion } from 'framer-motion';
import { categoryDistribution } from '../../data/tasks';

const CategoryDistribution: React.FC = () => {
  const totalTasks = categoryDistribution.reduce((acc, curr) => acc + curr.count, 0);
  
  const colors = [
    'bg-green-500', // Nettoyage
    'bg-orange-500', // Cuisine
    'bg-lime-500', // Jardin
    'bg-blue-500', // Devoirs
    'bg-purple-500', // Autre
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Distribution des tâches</h3>
      
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-5 flex">
        {categoryDistribution.map((category, index) => {
          const width = (category.count / totalTasks) * 100;
          return (
            <motion.div
              key={category.category}
              className={`${colors[index]} h-full`}
              style={{ width: `${width}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          );
        })}
      </div>
      
      <div className="space-y-4">
        {categoryDistribution.map((category, index) => {
          const percentage = ((category.count / totalTasks) * 100).toFixed(1);
          return (
            <motion.div 
              key={category.category}
              className="flex items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <div className={`w-3 h-3 rounded-full ${colors[index]} mr-3`} />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{category.category}</span>
                  <span className="text-sm font-medium text-gray-500">{percentage}%</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <motion.div 
                      className={`h-2 rounded-full ${colors[index]}`}
                      style={{ width: `${percentage}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                  <span className="ml-3 text-xs text-gray-500">{category.count} tâches</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDistribution;
