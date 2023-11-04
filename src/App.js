
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {  ToastContainer } from "react-toastify";
import Protected from './components/Protected';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     <Routes>
      <Route path='/' element= {<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element = {<Protected Component={Home} />} />
      {/* <Route path='/profile' element={<Protected Component={Profile} />} /> */}

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
