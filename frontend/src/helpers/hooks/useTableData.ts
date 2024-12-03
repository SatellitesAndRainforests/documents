import { useState, useEffect } from 'react';
import axios from 'axios';

const useTableData = () => {

  const [ tables, setTables ] = useState<string[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  useEffect( () => {

    const fetchTables = async () => {

      try {

        const response = await axios.get('/hello');

        setTables(response.data.tables || []);

      } catch (err) {

        console.log('failed ot fetch tables. please try again later');
        setError('failed ot fetch tables. please try again later');

      }

    };

    fetchTables();

  }, []);

  return { tables, error};

};


export default useTableData;


