import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserRouter from './routes/UserRouter';

function App() {
  // axios.defaults.baseURL = "http://localhost:4000"
  axios.defaults.baseURL = "https://pdfzone.comicworld.store"
  axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<UserRouter />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
