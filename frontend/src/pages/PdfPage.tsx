import React, { useState } from 'react';
import ReactPdf from '../components/ReactPdf';
import ReactPdfViewer from '../components/ReactPdfViewer';
import PdfJs from '../components/PdfJs';

const PdfPage = () => { 

  return ( 

          <div id="pdfPage">

            <h1 id="reactPdfHeading"> react-pdf </h1>
            {/* <ReactPdf fileUrl="./lgr.pdf" /> */}
            {/**/} <ReactPdf fileUrl="./test.pdf" /> {/**/}

            <h1 id="reactPdfViewerHeading"> react-pdf-viewer </h1>
            {/* <ReactPdfViewer fileUrl="./lgr.pdf" /> */}
            {/**/} <ReactPdfViewer fileUrl="./test.pdf" /> {/**/}

            <h1 id="pdfJsHeading"> pdf.js </h1>
            {/* <PdfJs fileUrl="./lgr.pdf" /> */}
            {/**/} <PdfJs fileUrl="./test.pdf" /> {/**/}
  
          </div>

         );

};

export default PdfPage;
