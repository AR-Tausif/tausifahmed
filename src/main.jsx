import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import DataProvider from './providers/DataProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
    </DataProvider>
  </React.StrictMode>,
)
