import { Routes, Route } from 'react-router-dom'
import Signup from '../components/Signup/Signup'




const UserRouter = () => {

    return (
        <Routes >
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}

export default UserRouter