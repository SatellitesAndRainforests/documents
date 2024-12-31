import React, { useState } from 'react';

import PdfJsIframe from '../components/documents/PdfJsIframe';

import useDocumentsData from '../helpers/hooks/useDocumentsData';
import DocumentsList from '../components/documents/DocumentsList';
import ErrorMessage from '../components/generic/ErrorMessage';


const DocumentsPage = () => { 

  const { documents, error } = useDocumentsData();
  const [fileUrl, setFileUrl] = useState<string>("");

  return ( 

          <div id="documentsPage">

            <div>
              <h1> Available DynamoDb Tables </h1>
                <ErrorMessage error={error} />
                <DocumentsList documents={documents} onSelect={setFileUrl} />
            </div>

            <button
              style={{marginLeft: '10px'}}
              onClick={() => setFileUrl("")}
            >
              Deselect
            </button>


            {/**/} <h1 id="pdfJsIframeHeading"> pdf.js src in iframe </h1> {/**/}
            {/**/} <PdfJsIframe fileUrl={fileUrl} /> {/**/}
            {/* <PdfJsIframe fileUrl="../../../lgr.pdf" /> */}		
            {/* <pdfViewer> is looking in web/ not public/ */}

          </div>

         );

};

export default DocumentsPage;
