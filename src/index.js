import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Learn from './pages/Learn';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
import C_Editor from './pages/Collaborative_Coding/C_Editor';
import C_Home from './pages/Collaborative_Coding/C_Home';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/C_Home",
    element: <C_Home />,
  },
  {
    path: "/C_Editor",
    element: <C_Editor />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
