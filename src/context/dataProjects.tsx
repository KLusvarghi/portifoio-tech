import { createContext, useEffect, useState } from 'react';
import { IChildrenProps } from '../types/auxProps';
import api from '../api/projectsApi.json';

export interface ISystemProjectContext {
  data: IApiContext[];
  error: boolean;
  specificProject: (id: string) => IApiContext | undefined;
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
}

export const SystemProjectContext = createContext<ISystemProjectContext>({
  data: [], // Array vazio por padrão
  error: false,
  setError: () => {},
  specificProject: () => undefined, // Função de fallback que retorna undefined
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

  const specificProject = (id: string) => {
    const project = data.find((project) => project.linkTo === id);
    if (project) {
      setError(false);
      return project;
    }
    setError(true);
    return undefined;
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
