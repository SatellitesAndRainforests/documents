import React from 'react';
import TablePage from './pages/TablePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablePage />} />
        {/* Add more routes as needed */}
        {/* <Route path="/pdf-viewers" element={<PdfPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

