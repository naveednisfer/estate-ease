import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { CreatePost } from './components/CreatePost';

function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'create'>('dashboard');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as 'dashboard' | 'create');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
      {currentPage === 'create' && <CreatePost onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;