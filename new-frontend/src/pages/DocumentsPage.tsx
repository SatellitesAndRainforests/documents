import React, { useState } from 'react';

import PdfJsIframe from '../components/documents/PdfJsIframe';


const DocumentsPage = () => { 

  return ( 

          <div id="documentsPage">

            {/**/} <h1 id="pdfJsIframeHeading"> pdf.js src in iframe </h1> {/**/}
            {/**/} <PdfJsIframe fileUrl="./test.pdf" /> {/**/}
            {/* <PdfJsIframe fileUrl="../../../lgr.pdf" /> */}		
            {/* <pdfViewer> is looking in web/ not public/ */}

          </div>

         );

};

export default DocumentsPage;
