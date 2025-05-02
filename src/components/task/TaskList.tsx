import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TaskCard from './TaskCard';
import { Task, categories } from '../../data/tasks';
import { FaPlus, FaFilter, FaChevronDown } from 'react-icons/fa';

interface TaskListProps {
  tasks: Task[];
  title: string;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, title }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);

  const handleValidate = (id: string) => {
    // Simulation de la validation par IA
    alert('Fonction de validation par IA en cours de développement. Prenez une photo pour valider la tâche !');
  };

  const filteredTasks = selectedCategory === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-gray-600">{filteredTasks.length} tâches à afficher</p>
        </div>
        <div className="flex items-center mt-3 md:mt-0 space-x-3">
          <div className="relative">
            <motion.button 
              className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 text-gray-700"
              onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFilter className="mr-2 text-blue-500" />
              <span>Filtrer</span>
              <FaChevronDown className="ml-2" />
            </motion.button>
            
            {filterDropdownOpen && (
              <motion.div 
                className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button 
                    className={`block px-4 py-2 text-sm w-full text-left ${selectedCategory === 'all' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
                    onClick={() => {
                      setSelectedCategory('all');
                      setFilterDropdownOpen(false);
                    }}
                  >
                    Toutes les catégories
                  </button>
                  {categories.map(category => (
                    <button 
                      key={category.id}
                      className={`block px-4 py-2 text-sm w-full text-left ${selectedCategory === category.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setFilterDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          
          <motion.button 
            className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus className="mr-2" />
            Ajouter
          </motion.button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} onValidate={handleValidate} />
        ))}
        
        {filteredTasks.length === 0 && (
          <motion.div 
            className="col-span-full bg-gray-50 rounded-lg p-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune tâche trouvée</h3>
            <p className="text-gray-600">
              Il n'y a pas de tâches correspondant à ce filtre. Essayez un autre filtre ou ajoutez une nouvelle tâche.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
