import styled from 'styled-components';
import { Image } from '../Image/Image';
import close from '/icons/fechar.png';

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
    max-height: 420px;
    cursor: auto;

    &:hover {
      transform: scale(1);
    }
  }
`;

export const Close = styled.img`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    transform: scale(1.25);
  }
`;

export const ModalZoom = ({ photo, onClose }: IModalZoomProps) => {
  return (
    <>
      {photo && (
        <Overlay>
          <Close src={close} onClick={onClose} />
          <Image photo={photo} />
        </Overlay>
      )}
    </>
  );
};
