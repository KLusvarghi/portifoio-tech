import { createBrowserRouter } from 'react-router-dom';
import Pagina404 from '../pages/home/error/Page404';
import BaseLayout from '../pages/home/BaseLayout/BaseLayout';
import Home from '../pages/home/Home';
import Certificates from '../pages/Certificates/Certificates';
import ProjectDetails from '../pages/Projects/ProjectDetails';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <BaseLayout />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/certificados',
    element: <BaseLayout />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: '',
        element: <Certificates />,
      },
    ],
  },
  {
    path: '/projetos/:id',
    element: <BaseLayout />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: '',
        element: <ProjectDetails />,
      },
    ],
  },
]);
