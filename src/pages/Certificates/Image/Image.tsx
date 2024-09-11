import { forwardRef } from 'react';
import styled from 'styled-components';
import { getImageUrl } from '../../../utils/imageUtils';

export const Container = styled.img`
  max-height: 120px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in;

  @media (min-width: 660px) {
    &:hover {
      transform: scale(1.525);
    }
  }

  @media (max-width: 460px) {
    max-height: 96px;
  }
`;

interface IImageProps {
  photo: number;
}

export const Image = forwardRef<HTMLImageElement, IImageProps>(
  ({ photo }, ref) => {
    return (
      <Container
        ref={ref}
        src={getImageUrl(photo.toString(), 'certificatesPng')}
        alt={`imagem ilustrativa do certificado com id: ${photo}`}
      />
    );
  },
);
