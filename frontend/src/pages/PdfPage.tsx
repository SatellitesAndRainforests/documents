import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';

const PdfPage = () => { 

  return ( 

          <div>
            <h1> react-pdf </h1>
            <PdfViewer fileUrl="./test.pdf" />
          </div>

         );

};

export default PdfPage;
