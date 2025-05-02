import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/tasks" element={
            <Layout>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Planificateur de tâches</h1>
                <p className="text-gray-600">Cette section est en cours de développement...</p>
              </div>
            </Layout>
          } />
          <Route path="/rewards" element={
            <Layout>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Système de récompenses</h1>
                <p className="text-gray-600">Cette section est en cours de développement...</p>
              </div>
            </Layout>
          } />
          <Route path="*" element={
            <Layout>
              <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Page non trouvée</h1>
                <p className="text-gray-600 mb-4">La page que vous recherchez n'existe pas.</p>
                <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Retour à l'accueil
                </a>
              </div>
            </Layout>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;