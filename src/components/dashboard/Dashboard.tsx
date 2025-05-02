import React from 'react';
import { motion } from 'framer-motion';
import CategoryDistribution from './CategoryDistribution';
import FamilyProgress from './FamilyProgress';
import ProgressChart from './ProgressChart';
import { mockTasks } from '../../data/tasks';

const Dashboard: React.FC = () => {
  // Calculer les tâches pour aujourd'hui
  const today = new Date().toISOString().split('T')[0];
  const upcomingTasks = mockTasks.filter(task => !task.completed).slice(0, 3);
  const completedTasks = mockTasks.filter(task => task.completed).length;
  const totalTasks = mockTasks.length;
  const completionPercentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête du dashboard */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">Bienvenue dans FamilyTask</h1>
        <p className="text-gray-600 mt-2">Gérez efficacement les tâches de votre famille</p>
      </motion.div>

      {/* Résumé */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-500"
          whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="text-gray-500 text-sm font-medium">Tâches totales</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{totalTasks}</p>
          <div className="flex items-center mt-4">
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
              <motion.div 
                className="h-2 bg-blue-500 rounded-full" 
                style={{ width: `${completionPercentage}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <span className="ml-3 text-sm text-gray-600">{completionPercentage}%</span>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500"
          whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="text-gray-500 text-sm font-medium">Tâches complétées</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{completedTasks}</p>
          <div className="mt-4 text-sm text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Bonne progression !
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-500"
          whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="text-gray-500 text-sm font-medium">Points à gagner</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">
            {upcomingTasks.reduce((sum, task) => sum + task.points, 0)}
          </p>
          <div className="mt-4 text-sm text-purple-600">
            {totalTasks - completedTasks} tâches restantes
          </div>
        </motion.div>
      </motion.div>

      {/* Tâches à venir */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4">Tâches à venir</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingTasks.map((task, index) => (
            <motion.div 
              key={task.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              {task.imageUrl && (
                <div className="h-40 overflow-hidden">
                  <img 
                    src={task.imageUrl} 
                    alt={task.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800">{task.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {task.points} pts
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    Assigné à: <span className="font-medium">{task.assignedTo}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Échéance: <span className="font-medium">{new Date(task.dueDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button 
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voir toutes les tâches
        </motion.button>
      </motion.div>

      {/* Statistiques */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Statistiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="md:col-span-2"
        >
          <ProgressChart />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="md:col-span-1"
        >
          <CategoryDistribution />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="md:col-span-3"
        >
          <FamilyProgress />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
