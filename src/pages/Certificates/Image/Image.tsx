import { getImageUrl } from '../../../utils/imageUtils';
import styled from 'styled-components';

export const Container = styled.img`
  max-height: 120px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 0px;
    transform: scale(1.525);
  }

  @media (max-width: 460px) {
    max-height: 96px;
  }
`;

export const Image = ({ photo }: { photo: number }) => {
  return (
    <Container
      src={getImageUrl(photo.toString(), 'certificatesPng')}
      alt={`imagem ilustrativa do certificado com id: ${photo}`}
    />
  );
};
