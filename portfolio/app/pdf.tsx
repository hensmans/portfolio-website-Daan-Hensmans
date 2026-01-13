'use client';
import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import pdfStyles from './css/pdf.module.css';

// Worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface Parameters {
    maximizeState: boolean;
}


export default function Pdf({ maximizeState }: Parameters) {
    const pdfUrl = "/Hensmans-Daan-CV.pdf";

    const pdfWrapperRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (pdfWrapperRef.current) {
            const width = pdfWrapperRef.current.getBoundingClientRect().width;
            setContainerWidth(maximizeState ? (2 * width / 3) : width);
        }
    }, [maximizeState]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CV-Hensmans-Daan.pdf'; // PDF name when downloaded
        link.click();
    };

    return (
        <div className={pdfStyles.pdfRoot}>
            {/* Download Button */}
            <button onClick={handleDownload} className={`${pdfStyles.downloadButton} ${maximizeState ? pdfStyles.downloadButtonBig : pdfStyles.downloadButtonSmall}`}>
                Download PDF
            </button>

            {/* PDF viewer */}
            <div className={`${pdfStyles.pdfWrapper}`} ref={pdfWrapperRef}>
                <Document file={pdfUrl}
                    loading={<div className={pdfStyles.loadingText}>Loading PDF...  </div>}>
                    <Page key={`page_1`} pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={containerWidth} />
                </Document>
            </div>
        </div>
    );
}