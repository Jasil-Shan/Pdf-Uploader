import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { Card, CssBaseline, Typography } from '@mui/material'
import { Box } from '@mui/system'



const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleClick() {
        dispatch(logout())
        navigate('/login', { replace: true })
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

                <Typography mt={8} fontWeight={900} fontSize={36} maxWidth={600} textAlign={'center'} sx={{opacity:.9}}>The Smartest Way to Upload & Create new Pdf</Typography>
                {/* <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 65,
                    borderWidth:3,
                borderRadius:8,
                border-color: rgb(220, 155, 255);
                border-style: dashed;
                background-color: rgb(250, 250, 250);
                color: rgb(189, 189, 189);
                outline: none;
                transition: border 0.24s ease-in-out 0s;
    cursor: pointer;}}> */}
                <Card sx={{ borderRadius: 20, margin:5, boxShadow: 3, maxWidth: 780, padding: 20 }}>
                    <Button variant='contained'>Upload File</Button>
                </Card>
                {/* <Button variant="text" onClick={handleClick} color="primary">Logout</Button> */}
            </Box >
        </>
    )
}

export default Home