import styled from 'styled-components';
import certificatesApi from '../../../../api/certificatesApi.json';
import { getImageUrl } from '../../../../utils/imageUtils';

type Certificate = (typeof certificatesApi)[0];

export const Image = styled.img`
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

export const Item = (props: Certificate) => {
  const { id, name } = props;

  return (
    <Image
      src={getImageUrl(id.toString(), 'certificatesPng')}
      alt={`imagem ilustrativa do certificado: ${name}`}
    />
  );
};
