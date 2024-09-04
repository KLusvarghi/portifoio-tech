import { Typography } from '../../components/Typography/Typography';
import { Head } from '../../components/Head/Head';
import { Title } from '../../components/Typography/Title';
import certificatesApi from '../../api/certificatesApi.json';
import { getImageUrl } from '../../utils/imageUtils';
import {
  Main,
  Wrapper,
  ContainerCertificates,
  Filter,
  Ul,
  Li,
  Image,
} from './styles';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';

const Certificates = () => {
  const [visibleItems, setVisibleItems] = useState(17);
  const increment = 17;

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + increment, certificatesApi.length));
  };

  return (
    <Main>
      <Head
        title="Certificados | Kauã Ortolani Lusvarghi"
        description="Página com todos meus certificados"
      />
      <Title title="Minhas certificações tech" />
      <Wrapper>
        <Filter>
          <Ul>
            <Li>
              <Typography variant="body">Typescript</Typography>
            </Li>
            <Li>
              <Typography variant="body">Javacript</Typography>
            </Li>
            <Li>
              <Typography variant="body">Next.js</Typography>
            </Li>
            <Li>
              <Typography variant="body">SASS</Typography>
            </Li>
            <Li>
              <Typography variant="body">Tailwind</Typography>
            </Li>
            <Li>
              <Typography variant="body">Styled-Component</Typography>
            </Li>
            <Li>
              <Typography variant="body">React</Typography>
            </Li>
          </Ul>
        </Filter>
        <ContainerCertificates>
          {certificatesApi.slice(0, visibleItems).map((certificate) => (
            <Image
              key={certificate.id}
              src={getImageUrl(certificate.id.toString(), 'certificatesPng')}
              alt={`imagem ilustrativa do certificado: ${certificate.name}`}
            />
          ))}
        </ContainerCertificates>
          {visibleItems < certificatesApi.length && (
            <Button variant="project" onClick={showMoreItems}>
              Ver mais certificados
            </Button>
          )}
      </Wrapper>
    </Main>
  );
};

export default Certificates;
