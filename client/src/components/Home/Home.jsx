import { useCallback } from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, Card, CssBaseline, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

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
})

const Home = () => {
    const navigate = useNavigate()

    const handleFileUpload = async (event) => {
        event.preventDefault()

        const selectedPdf = event.target.files[0]

        if (selectedPdf.type === 'application/pdf') {
            const formData = new FormData()
            formData.append('file', selectedPdf)
            const result = await axios.post('/uploadPdf', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            console.log(result)
            navigate('/pdfView')
        } else {
            toast.error('Please upload only pdf format', {
                position: 'top-center',
            })
        }
    }

    const handleDragOver = useCallback((e) => {
        e.preventDefault()
    }, [])

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault()

            const files = e.dataTransfer.files

            if (files.length > 0) {
                const selectedPdf = files[0]

                if (selectedPdf.type === 'application/pdf') {
                    const formData = new FormData()
                    formData.append('file', selectedPdf)
                    axios.post('/uploadPdf', formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    })
                        .then((result) => {
                            console.log(result)
                            navigate('/pdfView')
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                } else {
                    toast.error('Please upload only pdf format', {
                        position: 'top-center',
                    })
                }
            }
        },
        [navigate]
    )

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
                    backgroundImage: 'src/assets/bg.svg',
                }}
            >
                <Typography mt={5} fontWeight={900} fontSize={36} maxWidth={600} textAlign={'center'} sx={{ opacity: 0.9 }}>
                    The Smartest Way to Upload & Create new Pdf
                </Typography>
                <Card
                    sx={{
                        borderRadius: 20,
                        margin: 2,
                        boxShadow: 3,
                        maxWidth: 680,
                        padding: 20,
                        textAlign: 'center',
                        cursor: 'pointer',
                        border: '2px dashed #ccc',
                    }}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <CloudUploadIcon sx={{ fontSize: 60, color: '#ccc', }} />
                    <Typography variant="h6" sx={{ opacity: 0.7 }}>
                        Drag & Drop or Click to Upload a PDF
                    </Typography>
                    <Button component="label" sx={{marginTop:2, opacity:.8}} variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload file
                        <VisuallyHiddenInput type="file" onChange={handleFileUpload} accept='.pdf' />
                    </Button>
                </Card>
            </Box>
        </>
    )
}

export default Home


