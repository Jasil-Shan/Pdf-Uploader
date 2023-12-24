import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { getPdf } from '../../../services/pdfService';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PdfViewer = () => {
  
  useEffect(() => {
    try {
      (
        async function () {
          const { data } = await getPdf()
          if (data.status) {
            setBookings(data.bookings)
          }
        })()
    } catch (error) {
      console.log(error);
    }
  }, []);



  if (!pdfFile) {
    return <div>Loading...</div>; // Display a loading message
  }

  return (
    <Grid container spacing={2}>
      <Document file={pdfFile}>
        {Array.from({ length: pdfFile.numPages }, (_, index) => (
          <Grid item key={index + 1}>
            <Page
              pageNumber={index + 1}
            // onClick={() => handlePageToggle(index + 1)}
            // style={{ border: selectedPages.includes(index + 1) ? '2px solid red' : 'none' }}
            />
          </Grid>
        ))}
      </Document>
    </Grid>
  );
}

export default PdfViewer
