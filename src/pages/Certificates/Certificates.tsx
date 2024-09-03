import { Typography } from '../../components/Typography/Typography';
import { Head } from '../../components/Head/Head';
import { Main } from '../../styles/mainContainer';
import { Title } from '../../components/Typography/Title';
import {
  StyledCertigficates,
  Wrapper,
  ContainerCertificates,
  Filter,
  Ul,
  Li,
} from './styles';

const Certificates = () => {
  return (
    <Main>
      <StyledCertigficates>
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
            
          </ContainerCertificates>
        </Wrapper>
      </StyledCertigficates>
    </Main>
  );
};

export default Certificates;
