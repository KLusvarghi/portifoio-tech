import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>, //quando queremos retornar um useSatate é dessa maneira que podemos fazemos
];

// 'T' contem o formato que nosso tema tem, que neste caso é o "DefaultTheme" que fooi passado no outro componente
const usePersistedState = <T>(key: string, initialState: T): Response<T> => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
