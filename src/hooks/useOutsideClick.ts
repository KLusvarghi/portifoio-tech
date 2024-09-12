import React, { useCallback, useEffect } from 'react';

interface IOutsideClickProps {
  onClose: () => void;
  ref: React.MutableRefObject<HTMLImageElement | HTMLUListElement | null>;
  refToDisregard?: React.RefObject<HTMLDivElement>;
}

const useOutsideClick = ({
  onClose,
  ref,
  refToDisregard,
}: IOutsideClickProps) => {
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
          if (refToDisregard?.current) {
            const disregardedRect =
              refToDisregard.current.getBoundingClientRect();
            if (
              clientX >= disregardedRect.left &&
              clientX <= disregardedRect.right &&
              clientY >= disregardedRect.top &&
              clientY <= disregardedRect.bottom
            ) {
              return;
            } else {
              onClose();
            }
          }
        }
      }
    },
    [onClose, ref, refToDisregard],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useOutsideClick;
