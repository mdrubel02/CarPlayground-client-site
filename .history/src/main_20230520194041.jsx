import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './Layout/Route/router';
import AuthProvider from './Context/AuthProvider';
import 'react-photo-view/dist/react-photo-view.css';
import 'react-tabs/style/react-tabs.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer position='top-center' />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
