import React, { useState } from 'react';

import PdfJs from '../components/PdfJs';
import ReactPdf from '../components/ReactPdf';
import ReactPdfViewer from '../components/ReactPdfViewer';


import PdfJsIframe from '../components/PdfJsIframe';

//import PdfJsApp from '../components/PdfJsApp';



const PdfPage = () => { 

  return ( 

          <div id="pdfPage">

            <h1 id="pdfJsHeading"> pdf.js </h1>
            {/* <PdfJs fileUrl="./lgr.pdf" /> */}
            {/* <PdfJs fileUrl="./test.pdf" /> */}

            <h1 id="reactPdfHeading"> react-pdf </h1>
            {/* <ReactPdf fileUrl="./lgr.pdf" /> */}
            {/* <ReactPdf fileUrl="./test.pdf" /> */}

            <h1 id="reactPdfViewerHeading"> react-pdf-viewer </h1>
            {/* <ReactPdfViewer fileUrl="./lgr.pdf" /> */}
            {/* <ReactPdfViewer fileUrl="./test.pdf" /> */}

						<p>-----------------------------------------------------------</p>

            {/**/} <h1 id="pdfJsIframeHeading"> pdf.js src in iframe </h1> {/**/}
            {/* <PdfJsIframe fileUrl="./test.pdf" /> */}
            {/**/} <PdfJsIframe fileUrl="../../../lgr.pdf" /> {/**/}		{/* web/<pdfViewer> is looking in web/ not public/ /*}

            {/**/} <h1 id="pdfJsAppHeading"> pdf.js app </h1> {/**/}
            {/* <PdfJsApp fileUrl="./lgr.pdf" /> */}
            {/* <PdfJsApp fileUrl="./test.pdf" /> */}
 
 
          </div>

         );

};

export default PdfPage;
