import { useState, useEffect } from 'react';

const useFetchData = (url: string) => {
  const [data, setData] = useState<object | null>(null);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetchData;
