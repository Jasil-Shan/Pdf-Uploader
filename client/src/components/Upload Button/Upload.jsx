import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch } from 'react-redux';
import { uploadPdf } from '../../../redux/slices/pdfUploadSlice';
import { useNavigate } from 'react-router-dom';

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

const Upload = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleFileUpload = (event) => {
        const selectedPdf = event.target.files[0]
        console.log(selectedPdf);
        if (selectedPdf.type === 'application/pdf') {
            const serializableFile = {
                name: selectedPdf.name,
                size: selectedPdf.size,
                type: selectedPdf.type,
                lastModified: selectedPdf.lastModified,
            };
            dispatch(uploadPdf(serializableFile));
            navigate('/pdfView')
        } else {
            console.log('Not a pdf');
        }
    }


    return (
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput type="file" onChange={handleFileUpload} accept='.pdf' />
        </Button>
    );
}


export default Upload