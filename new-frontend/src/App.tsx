import React from 'react';
import TablePage from './pages/TablePage';
import DocumentsPage from './pages/DocumentsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<TablePage />} />
        <Route path="/doc" element={<DocumentsPage />} /> 

      </Routes>
    </Router>
  );
}

export default App;

