// import { createContext, useState } from 'react';
// import { AuxProps } from '../types/auxProps';

// export interface IApiContext {
//   id: number;
//   nome: string;
//   preDescricao: string;
//   descricao: string;
//   tecnologias: string[];
//   site: string;
//   linkRepositorio: string;
//   image: string;
//   linkTo: string;
// }

// interface IData {
//   data: [{}]
// }

// const apiData = {
//   id: '',
//   nome: '',
//   preDescricao: '',
//   descricao: '',
//   tecnologias: [],
//   site: '',
//   linkRepositorio: '',
//   image: '',
//   linkTo: '',
// };

// export const SystemThemeContext = createContext<IApiContext>({
//   project: apiData,
//   projetoEspecifico: () => {},
// });

// export const SystemThemeProvider = ({ children }: AuxProps) => {
//   const [data, setData] = useState({});

//   const handleSetData = (data: IData ) => {
//     const
//   };


//   const projetoEspecifico = (id: number) => {};

//   const context = {
//     data,
//     setData: handleSetData,
//     projetoEspecifico,
//   };

//   return (
//     <SystemThemeContext.Provider value={context}>
//       {children}
//     </SystemThemeContext.Provider>
//   );
// };
