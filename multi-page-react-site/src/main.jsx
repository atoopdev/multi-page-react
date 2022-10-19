import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

// existing imports
import Root, {loader as rootLoader, action as rootAction } from "./routes/root"
import ErrorPage from "./error-page"
import Contact, {loader as contactLoader} from "./routes/contact"

// entry point
// first route is the root route as the rest of routes will render inside. Thus root layout of IU.

const router = createBrowserRouter([{
  path: "/",
  // element: <div>Hello world!</div>
  // do this once routes/root created
  element: <Root />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  // allows the link to be displayed inside root - but needs to be paired with <outlet> in root.jsx to work
  children:[
    {
      path: "contacts/:contactId",
      element: <Contact />,
      loader: contactLoader,
    },
  ],
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
