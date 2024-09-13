import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CharacterDetail from './Pages/CharacterDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:name" element={<CharacterDetail />} />
    </Routes>
  );
};

export default App;
