import React from 'react'
import Confirm from './pages/Confirm';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import SelectService from './pages/SelectService'
import PickTime from './pages/PickTime'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/select-service', element: <SelectService /> },
  { path: '/pick-time', element: <PickTime /> },
  {
    path:'/confirm',
    element:<Confirm/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)