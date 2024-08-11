import { createBrowserRouter } from 'react-router-dom';
import Pagina404 from '../paginas/error/Page404';
import BaseLayout from '../paginas/BaseLayout';
import Home from '../paginas/Home/Home';
import Certificates from '../paginas/Certificates/Certificates';

// sendo o "router" nosso provedor
export const router = createBrowserRouter([
  {
    path: '/pagina-inicial',
    element: <BaseLayout/>,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: 'certificates',
            element: <Certificates />,
          },
        ],
      },
    ],
  },
]);
