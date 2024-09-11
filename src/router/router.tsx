import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/home/error/NotFound';
import BaseLayout from '../pages/home/BaseLayout/BaseLayout';
import Home from '../pages/home/Home';
import Certificates from '../pages/Certificates/Certificates';
import ProjectDetails from '../pages/Projects/ProjectDetails';

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
      // Adicionando rota curinga para o 404
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
