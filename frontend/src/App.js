import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tables, setTables] = useState([]); // State to store table names
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get('/hello'); // Proxy will redirect to http://localhost:3000/hello
        console.log('API Response:', response.data); // Debugging response
        setTables(response.data.tables || []); // Set tables or fallback to an empty array
      } catch (err) {
        console.error('Error fetching tables:', err);
        setError('Failed to fetch tables. Please try again later.');
      }
    };

    fetchTables();
  }, []);

  return (
    <div>
      <h1>Available DynamoDB Tables</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tables.length > 0 ? (
        <ul>
          {tables.map((table, index) => (
            <li key={index}>{table}</li>
          ))}
        </ul>
      ) : (
        <p>Loading tables...</p>
      )}
    </div>
  );
}

export default App;

