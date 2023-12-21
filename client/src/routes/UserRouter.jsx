import { Routes, Route } from 'react-router-dom'
import Signup from '../components/Signup/Signup'
import Login from '../components/Login/Login'




const UserRouter = () => {

    return (
        <Routes >
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default UserRouter