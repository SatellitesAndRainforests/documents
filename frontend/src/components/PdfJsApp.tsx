import React, { useEffect } from 'react';

const PdfJsApp = ( { fileUrl }: { fileUrl:i string } ) => {

	useEffect( () => { 

		const script = document.createElement('script');
		script.src = '/web/viewer.js';
		script.async = true;
		document.body.appendChild(script);
		
		const viewerScript = document.createElement('script');
		viewerScript.src = '/pdfjs/src/pdf.js'





	}, [fileUrl] );

	return 




};
