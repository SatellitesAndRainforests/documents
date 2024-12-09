/*
import React, { useEffect } from 'react';

type Props = {
	fileUrl: string;
}

const PdfJsApp: React.FC<Props> = ( { fileUrl } ) => {

	useEffect( () => {

		const script = document.createElement('script');
		script.src = '/pdfjs/srcVersion/web/viewer.mjs';
		script.type = 'module';
		document.body.appendChild(script);

		const viewerContainer = document.getElementById('viewerContainer');

		if (viewerContainer) {

			const pdfQueryString = encodeURIComponent(fileUrl);
			const viewerHtmlUrl = `pdfjs/srcVersion/viewer.html?file=${pdfQueryString}`;
			window.history.replaceState(null, '', viewerHtmlUrl);

		}

		return () => {
			document.body.removeChild(script);
		};

	}, [fileUrl] );

	return ( 

		<div
			id="viewerContainer"
			style={{
				height: '800px',
				width: '800px'
			}}
		>
		</div>

 	);

};

export default PdfJsApp;

*/
