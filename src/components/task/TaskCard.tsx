import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCamera, FaClock, FaStar } from 'react-icons/fa';
import { Task } from '../../data/tasks';

interface TaskCardProps {
  task: Task;
  onValidate: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onValidate }) => {
  const categoryColors: Record<string, string> = {
    'nettoyage': 'bg-green-500',
    'cuisine': 'bg-orange-500',
    'jardin': 'bg-lime-500',
    'devoirs': 'bg-blue-500',
    'autre': 'bg-purple-500'
  };

  const isOverdue = new Date(task.dueDate) < new Date();
  
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${task.completed ? 'border-2 border-green-500' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      {task.imageUrl && (
        <div className="relative h-40 w-full">
          <img 
            src={task.imageUrl} 
            alt={task.title} 
            className="w-full h-full object-cover"
          />
          <div className={`absolute top-3 right-3 ${categoryColors[task.category]} text-white text-xs px-2 py-1 rounded-full`}>
            {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
          </div>
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          <div className="flex items-center bg-blue-100 text-blue-800 px-2 rounded-full">
            <FaStar className="text-yellow-500 mr-1" size={14} />
            <span className="text-sm font-semibold">{task.points}</span>
          </div>
        </div>
        
        <p className={`text-sm text-gray-600 mb-4 ${task.completed ? 'line-through text-gray-400' : ''}`}>
          {task.description}
        </p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {task.assignedTo.charAt(0)}
            </div>
            <span className="text-sm text-gray-700 ml-2">{task.assignedTo}</span>
          </div>
          <div className={`flex items-center text-sm ${isOverdue && !task.completed ? 'text-red-500' : 'text-gray-500'}`}>
            <FaClock className="mr-1" />
            {task.dueDate}
          </div>
        </div>
        
        {task.completed ? (
          <div className="bg-green-100 text-green-800 rounded-lg p-2 flex items-center justify-center">
            <FaCheck className="mr-2" />
            <span>Tâche validée</span>
          </div>
        ) : (
          <motion.button
            onClick={() => onValidate(task.id)}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-medium flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCamera className="mr-2" />
            Valider avec photo
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default TaskCard;
