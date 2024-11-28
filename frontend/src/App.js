import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [wildlifeCaptureId, setWildlifeCaptureId] = useState('');
  const [wildlifeCapture, setWildlifeCapture] = useState(null);

  const fetchWildlifeCapture = async () => {

    try {

      const response = await axios.get('http://localhost:3000/wildlifeCapture', {
        params: { wildlifeCaptureId },
      });

      setWildlifeCapture(response.data);

    } catch (error) {
      console.error('error fetching wildlife capture:', error);
    }

  };

  return (
    <div>
    <h1> Wildlife Captures </h1>
    <input 
    type="text"
    placeholder="etner wildlife capture id"
    value={wildlifeCaptureId}
    onChange={ (e) => setWildlifeCaptureId(e.target.value) } 
    />

    <button onClick={fetchWildlifeCapture}>Fetch Wildlife Capture</button>

    {wildlifeCapture && (<div>
      <h2> Wildlife Capture Details</h2>
      <p>S3 URL: {wildlifeCapture.s3Url}</p>
      </div>
    )}

    </div>

  );
}

export default App;
