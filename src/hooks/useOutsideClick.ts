import React, { useCallback, useEffect } from 'react';

interface IOutsideClickProps {
  onClose: () => void;
  ref: React.MutableRefObject<HTMLImageElement | HTMLUListElement | null>;
}

const useOutsideClick = ({ onClose, ref }: IOutsideClickProps) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const { clientX, clientY } = event;
        if (
          clientX < rect.left ||
          clientX > rect.right ||
          clientY < rect.top ||
          clientY > rect.bottom
        ) {
          onClose();
        }
      }
    },
    [onClose, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useOutsideClick;
