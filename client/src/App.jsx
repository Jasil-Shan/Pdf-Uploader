import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './routes/userRouter'
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "http://localhost:4000"
  axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
