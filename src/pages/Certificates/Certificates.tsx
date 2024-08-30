import styled from 'styled-components';
import { Typography } from '../../components/Typography/Typography';
import { Head } from '../../components/Head/Head';
import { Main } from '../../styles/mainContainer';
import { Title } from '../../components/Typography/Title';

const StyledCertigficates = styled.main`
  height: 100vh;
`;
const Wrapper = styled.div``;
const ContainerCertificates = styled.div``;
const Filter = styled.div``;
const Ul = styled.ul``;
const Li = styled.li``;

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
                <Typography>Typescript</Typography>
              </Li>
              <Li>
                <Typography>Javacript</Typography>
              </Li>
              <Li>
                <Typography>Next.js</Typography>
              </Li>
              <Li>
                <Typography>SASS</Typography>
              </Li>
              <Li>
                <Typography>Tailwind</Typography>
              </Li>
              <Li>
                <Typography>Styled-Component</Typography>
              </Li>
              <Li>
                <Typography>React</Typography>
              </Li>
            </Ul>
          </Filter>
          <ContainerCertificates></ContainerCertificates>
        </Wrapper>
      </StyledCertigficates>
    </Main>
  );
};

export default Certificates;
