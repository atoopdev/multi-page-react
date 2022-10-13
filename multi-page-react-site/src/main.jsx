import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

// entry point
// first route is the root route as the rest of routes will render inside. Thus root layout of IU.

const router = createBrowserRouter([{
  path: "/",
  element: <div>Hello world!</div>
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
