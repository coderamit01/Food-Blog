import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/combined.css';
import { RouterProvider } from 'react-router-dom'
import AllRouters from './AllRouters/AllRouters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AllRouters} />
  </React.StrictMode>,
)