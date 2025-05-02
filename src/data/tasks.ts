export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  completed: boolean;
  points: number;
  category: 'nettoyage' | 'cuisine' | 'jardin' | 'devoirs' | 'autre';
  imageUrl?: string;
}

export const familyMembers = [
  { id: '1', name: 'Thomas', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', points: 75 },
  { id: '2', name: 'Sophie', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg', points: 120 },
  { id: '3', name: 'Lucas', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', points: 45 },
  { id: '4', name: 'Emma', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', points: 90 }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Faire la vaisselle',
    description: 'Nettoyer et ranger toute la vaisselle du dîner',
    assignedTo: 'Thomas',
    dueDate: '2025-05-03',
    completed: false,
    points: 10,
    category: 'cuisine',
    imageUrl: 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg'
  },
  {
    id: '2',
    title: 'Sortir les poubelles',
    description: 'Sortir les poubelles pour le ramassage de demain',
    assignedTo: 'Sophie',
    dueDate: '2025-05-02',
    completed: true,
    points: 5,
    category: 'nettoyage',
    imageUrl: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg'
  },
  {
    id: '3',
    title: 'Tondre la pelouse',
    description: 'Tondre la pelouse du jardin avant',
    assignedTo: 'Lucas',
    dueDate: '2025-05-04',
    completed: false,
    points: 15,
    category: 'jardin',
    imageUrl: 'https://images.pexels.com/photos/589/garden-grass-lawn-meadow.jpg'
  },
  {
    id: '4',
    title: 'Réviser les maths',
    description: 'Terminer les exercices de géométrie',
    assignedTo: 'Emma',
    dueDate: '2025-05-03',
    completed: false,
    points: 10,
    category: 'devoirs',
    imageUrl: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg'
  },
  {
    id: '5',
    title: 'Ranger sa chambre',
    description: 'Ranger complètement sa chambre et faire son lit',
    assignedTo: 'Sophie',
    dueDate: '2025-05-03',
    completed: false,
    points: 12,
    category: 'nettoyage',
    imageUrl: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg'
  },
  {
    id: '6',
    title: 'Préparer le petit-déjeuner',
    description: 'Préparer le petit-déjeuner pour toute la famille',
    assignedTo: 'Lucas',
    dueDate: '2025-05-02',
    completed: true,
    points: 8,
    category: 'cuisine',
    imageUrl: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg'
  }
];

export const categories = [
  { id: 'nettoyage', name: 'Nettoyage', color: '#4CAF50', icon: 'cleaning' },
  { id: 'cuisine', name: 'Cuisine', color: '#FF9800', icon: 'cooking' },
  { id: 'jardin', name: 'Jardin', color: '#8BC34A', icon: 'garden' },
  { id: 'devoirs', name: 'Devoirs', color: '#2196F3', icon: 'homework' },
  { id: 'autre', name: 'Autre', color: '#9C27B0', icon: 'other' }
];

export const weeklyProgress = [
  { day: 'Lun', completed: 4, total: 5 },
  { day: 'Mar', completed: 3, total: 6 },
  { day: 'Mer', completed: 5, total: 5 },
  { day: 'Jeu', completed: 2, total: 4 },
  { day: 'Ven', completed: 0, total: 3 },
  { day: 'Sam', completed: 0, total: 4 },
  { day: 'Dim', completed: 0, total: 2 }
];

export const categoryDistribution = [
  { category: 'Nettoyage', count: 7 },
  { category: 'Cuisine', count: 5 },
  { category: 'Jardin', count: 3 },
  { category: 'Devoirs', count: 6 },
  { category: 'Autre', count: 2 }
];
