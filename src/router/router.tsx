import { createBrowserRouter } from 'react-router-dom';
import Pagina404 from './error/Page404';



// sendo o "router" nosso provedor
export const router = createBrowserRouter([
  {
    path: '/',
    // element: <LayoutBase />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: 'cadastro',
        // element: <LayoutBaseCadastro />,
        children: [
          {
            path: '',
            // element: <SelecaoCliente />,
          },
          {
            path: 'interesses',
            // element: <Interesses />,
          },
          {
            path: 'dados-pessoais',
            // element: <DadosPessoais />,
          },
          {
            path: 'concluido',
            // element: <Concluido />,
          },
        ],
      },
    ],
  },
]);
