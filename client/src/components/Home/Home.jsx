import Navbar from '../Navbar/Navbar'
import { Button, Card, CssBaseline, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFileUpload = async (event) => {
        event.preventDefault()
        const selectedPdf = event.target.files[0]
        if (selectedPdf.type === 'application/pdf') {
            const formData = new FormData();
            formData.append('file', selectedPdf);
            const result = await axios.post('/uploadPdf', formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                })
            navigate('/pdfView')
        } else {
            console.log('Not a pdf');
        }
    }

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    overflow: 'hidden',
                }}
            >
                <Typography mt={8} fontWeight={900} fontSize={36} maxWidth={600} textAlign={'center'} sx={{ opacity: .9 }}>
                    The Smartest Way to Upload & Create new Pdf
                </Typography>
                <Card sx={{ borderRadius: 20, margin: 5, boxShadow: 3, maxWidth: 780, padding: 20 }}>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload file
                        <VisuallyHiddenInput type="file" onChange={handleFileUpload} accept='.pdf' />
                    </Button>
                </Card>
            </Box >
        </>
    )
}

export default Home