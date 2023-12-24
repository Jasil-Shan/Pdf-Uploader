import { CircularProgress, Box, Typography } from '@mui/material';
import Navbar from '../Navbar/Navbar';

const Loading = () => {
    return (
        <>
        <Navbar />
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // You can adjust the background color and opacity
                    zIndex: 9999, // Set a high z-index to make sure it's on top of other elements
                }}
            >
                <Box sx={{
                    alignItems:'center',
                    justifyContent: 'center',}}>
                    <CircularProgress size={80} thickness={4} color="primary" />
                    <Typography variant="h6" textAlign={'center'} color="primary" sx={{ marginTop: 2 }}>Loading...</Typography>
                </Box>
            </Box>
        </>
    );
};

export default Loading;
