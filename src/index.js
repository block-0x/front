import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './App';
import Search from './routes/search';
import Login from './routes/login';
import Alert from './routes/alert';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/alert" element={<Alert />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
