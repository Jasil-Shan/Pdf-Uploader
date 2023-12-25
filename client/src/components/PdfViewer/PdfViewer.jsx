import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf'
import { Box, Button, Checkbox, CssBaseline, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import jsPDF from 'jspdf'
import Loading from '../Loading/Loading'
import { getPdf } from '../../../services/pdfService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const PdfViewer = () => {
  const navigate = useNavigate()
  const [numPages, setNumPages] = useState(null)
  const [pdfFile, setPdfFile] = useState(null)
  const [selectedPages, setSelectedPages] = useState([])
  const [pdfUrl, setURl] = useState(null)
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    try {
      (async function () {
        const response = await getPdf()
        setPdfFile(new Blob([response.data]))
        const pdfUrl = URL.createObjectURL(new Blob([response.data]))
        setURl(pdfUrl)
        const pdfInfo = await pdfjs.getDocument(pdfUrl).promise
        setNumPages(pdfInfo.numPages)

        setTimeout(() => {
          setShowLoading(false)
        }, 3000);
      })();
    } catch (error) {
      console.log(error)
    }
  }, []);

  const handleDownload = async () => {
    const newPdf = new jsPDF()

    for (const selectedPage of selectedPages) {
      const pdfDocument = await pdfjs.getDocument({ url: pdfUrl }).promise;
      const page = await pdfDocument.getPage(selectedPage);
      const viewport = page.getViewport({ scale: 1.3 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
      const imgData = canvas.toDataURL('image/png');
      newPdf.addImage(imgData, 'PNG', 0, 0);
      if (selectedPages.indexOf(selectedPage) !== selectedPages.length - 1) {
        newPdf.addPage();
      }
    }
    newPdf.save('new-pdf.pdf');
    toast.error('Downloaded Successfully', {
      position: "top-center"
  })
    navigate('/')
  };

  if (showLoading || !pdfFile) {
    return <Loading />
  }

  return (
    <>
      <CssBaseline />
      <Navbar />
        {selectedPages.length > 0 && <Button  variant='contained' color='success' sx={{margin:2}} size='small' onClick={handleDownload}>Download Selected Pages</Button>}
      <Document file={pdfFile} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            overflow: 'hidden',
          }}
        >

          {Array.from({ length: numPages }, (_, index) => (
            <Grid item key={index + 1} marginLeft={2} boxShadow={3} marginTop={3} marginBottom={3}>
              <Page pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} width={400} height={500} />
              <Checkbox
                checked={selectedPages.includes(index + 1)}
                onChange={() => {
                  setSelectedPages((prevPages) =>
                    prevPages.includes(index + 1)
                      ? prevPages.filter((page) => page !== index + 1)
                      : [...prevPages, index + 1]
                  );
                }}
              />
            </Grid>
          ))}
        </Box>
      </Document>
    </>
  );
};

export default PdfViewer;
