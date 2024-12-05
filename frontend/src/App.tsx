import React from 'react';
import TablePage from './pages/TablePage';
import PdfPage from './pages/PdfPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <TablePage /> } />
        <Route path="/pdf-viewer" element={ <PdfPage /> } />
      </Routes>
    </Router>
  )

}


export default App;

