import { useEffect, useState } from 'react';

const useWindowPositionY = (): number => {
  const [positionY, setPositionY] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setPositionY(document.documentElement.scrollTop);

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('scroll', handleResize);
      return () => window.removeEventListener('scroll', handleResize);
    }
  }, []);

  return positionY;
};

export default useWindowPositionY;
