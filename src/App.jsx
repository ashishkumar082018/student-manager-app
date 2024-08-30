import React from 'react';
import { StudentProvider } from './store/StudentContext';
import StudentManager from './components/StudentManager';
import './App.css';

function App() {
  return (
    <StudentProvider>
      <div className="app">
        <StudentManager />
      </div>
    </StudentProvider>
  );
}

export default App;
