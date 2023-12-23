import { Routes, Route } from 'react-router-dom'
import Signup from '../components/Signup/Signup'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import ProtectedRoutes from '../utils/ProtectedRoutes'




const UserRouter = () => {

    return (
        <Routes >
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route element = {<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default UserRouter