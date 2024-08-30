import { createContext, useEffect, useState } from 'react';
import { IChildrenProps } from '../types/auxProps';
import api from '../api/projectsApi.json';

export interface ISystemProjectContext {
  data: IApiContext[];
  specificProject: (id: number) => IApiContext | boolean;
  error: boolean;
  setError: (value: boolean) => void;
}

export interface IApiContext {
  id: number;
  name: string;
  preDescription: string;
  description: string;
  technologies: string[];
  urlWebsite: string;
  repositoryLink: string;
  image: string;
  linkTo: string;
  project?: typeof apiData; // Adiciona a propriedade project, que pode ser opcional
  specificProject?: (id: number) => void; // Adiciona a função specificProject
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const apiData = {
  id: '',
  name: '',
  preDescription: '',
  description: '',
  technologies: [],
  urlWebsite: '',
  repositoryLink: '',
  image: '',
  linkTo: '',
};

export const SystemProjectContext = createContext<ISystemProjectContext>({
  // Corrige para que 'data' seja um array de IApiContext
  data: [], // Array vazio por padrão
  error: false,
  setError: () => {},
  specificProject: () => false, // Função de fallback que retorna false
});

export const SystemProjectProviderProject = ({ children }: IChildrenProps) => {
  const [data, setData] = useState<IApiContext[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const handleData = () => {
      setData(api);
    };
    handleData();
  }, []);

  const specificProject = (id: number) => {
    const project = data.find((project) => project.id === id);
    if (project) {
      setError(false);
      return project;
    }
    setError(true);
    return error;
  };

  const context = {
    data,
    error,
    setError,
    specificProject,
  };

  return (
    <SystemProjectContext.Provider value={context}>
      {children}
    </SystemProjectContext.Provider>
  );
};
