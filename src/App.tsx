import React from 'react';
import './App.css';
import BriefList from './components/BriefList/BriefsList';

const App: React.FC = () => (
  <div data-testid="app">
    <BriefList />
  </div>
);

export default App;
