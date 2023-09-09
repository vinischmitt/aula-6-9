import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { Home } from './pages/HomePage';


import { Login } from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
{path: '/criar-conta',
element: <CreateAccountPage />
},
]);

export const App = () => {
  return <RouterProvider router={router} />;
};