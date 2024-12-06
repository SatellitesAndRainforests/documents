import React, { useEffect } from 'react';

type Props = {
    fileUrl: string;
};

const PdfJsApp : React.FC<Props> = ({ fileUrl }) => {
    useEffect(() => {
        // Dynamically load the core PDF.js scripts
        const script = document.createElement('script');
        script.src = '/pdfjs/src/pdf.js';
        script.async = true;
        document.body.appendChild(script);

        const viewerScript = document.createElement('script');
        viewerScript.src = 'pdfjs/web/viewer.js';
        viewerScript.async = true;
        document.body.appendChild(viewerScript);

        // Initialize the viewer in a div
        const container = document.getElementById('pdfjs-container');
        if (container) {
            const PDFJS = window['pdfjsLib']; // Ensure pdf.js is globally accessible
            PDFJS.GlobalWorkerOptions.workerSrc = '/pdfjs/src/pdf.worker.js';

            PDFJS.getDocument(fileUrl).promise.then((pdf) => {
                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    pdf.getPage(pageNum).then((page) => {
                        const scale = 1.5; // Set desired scale
                        const viewport = page.getViewport({ scale });

                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        if (context) {
                            page.render({ canvasContext: context, viewport });
                            container.appendChild(canvas);
                        }
                    });
                }
            });
        }

        return () => {
            // Clean up scripts and div content
            document.body.removeChild(script);
            document.body.removeChild(viewerScript);
        };
    }, [fileUrl]);

    return (
        <div id="pdfjs-container" style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
            {/* PDF.js will render content here */}
        </div>
    );
};

export default PdfJsApp;

