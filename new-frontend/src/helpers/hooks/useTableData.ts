import { useState, useEffect } from 'react';
import axios from 'axios';

const useTableData = () => {

  const [ tables, setTables ] = useState<string[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  useEffect( () => {

    const fetchTables = async () => {

      try {
        const response = await axios.get('http://localhost:3000/hello');
        setTables(response.data.tables || []);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'; // Declare the variable here
        console.error('Failed to fetch tables:', errorMessage);
        setError(`Failed to fetch tables: ${errorMessage}`);
      }
    };

    fetchTables();

  }, []);

  return { tables, error};

};


export default useTableData;


