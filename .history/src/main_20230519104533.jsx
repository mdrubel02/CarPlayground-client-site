import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './Layout/Route/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer position='top-center'/>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
