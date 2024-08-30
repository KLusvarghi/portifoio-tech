import { createBrowserRouter } from 'react-router-dom';
import Pagina404 from '../pages/home/error/Page404';
import BaseLayout from '../pages/home/BaseLayout/BaseLayout';
import Home from '../pages/home/Home';
import Certificates from '../pages/Certificates/Certificates';
import Projects from '../pages/home/Projects/Projects';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <BaseLayout />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: 'projetos/:id',
            element: <Projects />,
          },
          {
            path: 'certificados',
            element: <Certificates />,
          },
        ],
      },
    ],
  },
]);
