import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/home/NotFound/NotFound';
import BaseLayout from '../pages/home/BaseLayout/BaseLayout';
import Home from '../pages/home/Home';
import Certificates from '../pages/Certificates/Certificates';
import ProjectDetails from '../pages/Projects/ProjectDetails';
import { Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'certificados',
        element: <Certificates />,
      },
      {
        path: 'projetos/:id',
        element: <ProjectDetails />,
      },
      {
        path: '/404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to={'/404'} replace/>,
      },
    ],
  },
]);
