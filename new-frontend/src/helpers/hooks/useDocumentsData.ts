import { useState, useEffect } from 'react';
import axios from 'axios';

interface Document {
  Id: string;
  Filename: string;
  Url: string;
}

const useDocumentsData = () => {

  const [ documents, setDocuments ] = useState<Document[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  useEffect( () => {

    const fetchDocuments = async () => {

      try {
        const response = await axios.get('http://localhost:3000/documents');
        setDocuments(response.data.documents || []);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Failed to fetch documents:', errorMessage);
        setError(`Failed to fetch documents: ${errorMessage}`);
      }
    };

    fetchDocuments();

  }, []);

  return { documents , error };

};


export default useDocumentsData;


