import certificatesApi from '../../../../api/certificatesApi.json';
import { getImageUrl } from '../../../../utils/imageUtils';
import { Container, Image } from './styles';

type Certificate = (typeof certificatesApi)[0];

export const Item = (props: Certificate) => {
  const { id, name } = props;

  return (
    <Container>
      <Image
        src={getImageUrl(id.toString(), 'certificatesPng')}
        alt={`imagem ilustrativa do certificado: ${name}`}
      />
    </Container>
  );
};
