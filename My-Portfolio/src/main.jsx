import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AboutMe from "./Pages/About.jsx";
import {ContactUs} from "./Pages/ContactUs.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutMe/>,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  }
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
    </RouterProvider>
)
