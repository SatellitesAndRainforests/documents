//import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import React from 'react';
import TablePage from './pages/TablePage';


function App() {

  return (
    <div>
      <TablePage />
    </div>
  )

}


export default App;




  /*
  // like code cshtml.cs

  const [tables, setTables] = useState([]); // state variable, an array, to store table names, 
                                            // [getter, setter] = inital value , useState returns
                                            // [ inital value , setter function ]
  const [error, setError] = useState(null); // State for errors


  useEffect(() => {     // very much like onGet razor pages

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

  } , [] );   // empty 2nd parameter means to call once 



  // like html .cshtml

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
        <p>Loading tables...</p>    // if tables.length <= 0 display , updates when state u[dates
      )}

    </div>


  );

  */



