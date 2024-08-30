import { useContext } from 'react';
import { ISystemProjectContext, SystemProjectContext } from '../context/dataProjects';

const useSystemProjectContext = (): ISystemProjectContext  => {
  return useContext(SystemProjectContext);
};

export default useSystemProjectContext;
