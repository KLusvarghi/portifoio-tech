import styled from 'styled-components';
import close from '/icons/fechar.png';
import { useCallback, useEffect, useRef } from 'react';
import { Image } from '../Image/Image';

interface IModalZoomProps {
  photo: number | null;
  onClose: () => void;
}
export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;

  img {
    border-radius: none !important;
    max-height: 420px;
    cursor: auto;

    @media (max-width: 660px) {
      max-height: 220px;
    }

    &:hover {
      transform: scale(1);
      border-radius: none;
    }
  }
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Close = styled.img`
  position: relative;
  max-width: 22px;
  top: +34px;
  right: +15px;
  align-self: flex-end;
  z-index: 1000;
  cursor: pointer !important;
`;

export const ModalZoom = ({ photo, onClose }: IModalZoomProps) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (imgRef.current) {
        // sendo rect o valor da imagem e clientX e Y o valor de onde foi clicado
        const rect = imgRef.current.getBoundingClientRect();
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
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      {photo && (
        <Overlay>
          <Box>
            <Close src={close} onClick={onClose} />
            <Image ref={imgRef} photo={photo} />
          </Box>
        </Overlay>
      )}
    </>
  );
};
