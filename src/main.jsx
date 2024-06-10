import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/routes";
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster reverseOrder={false} position='top-center' />
  </Provider>
)