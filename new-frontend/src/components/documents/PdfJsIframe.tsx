import React from 'react';

type Props = {
	fileUrl: string
}

const PdfJsIframe: React.FC<Props> = ( { fileUrl } ) => {

	return (

			<iframe
				src={`/pdfjs/srcVersion/web/viewer.html?file=${encodeURIComponent(fileUrl)}`}
				style={{
					width: '800px', 
					height: '800px'}}
				title="title title"
			/>

 	)

};

export default PdfJsIframe;
