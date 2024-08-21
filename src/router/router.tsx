import { createBrowserRouter } from 'react-router-dom';
import Pagina404 from '../paginas/error/Page404';
import BaseLayout from '../paginas/BaseLayout';
import Home from '../paginas/Home/Home';
import Certificates from '../paginas/Certificates/Certificates';
import Projects from '../paginas/Projects/Projects';

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
