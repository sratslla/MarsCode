import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Learn from './pages/Learn';
import Home from './pages/Home';
import C_Editor from './pages/Collaborative_Coding/C_Editor';
import C_Home from './pages/Collaborative_Coding/C_Home';
import Login from './pages/App';
import { UserContextProvider } from './context/userContext';

const router = createBrowserRouter([
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
  },
  {
    path: "/login",
    element: (
    <React.StrictMode>
      <UserContextProvider>
        <Login />
      </UserContextProvider>
    </React.StrictMode>
      )
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
