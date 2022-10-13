import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import ErrorPage from "./error-page"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

// existing imports
import Root from "./routes/root"

// entry point
// first route is the root route as the rest of routes will render inside. Thus root layout of IU.

const router = createBrowserRouter([{
  path: "/",
  // element: <div>Hello world!</div>
  // do this once routes/root created
  element: <Root />,
  errorElement: <ErrorPage />,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
