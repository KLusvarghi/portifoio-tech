import { Head } from '../../components/Head/Head';
import { Title } from '../../components/Typography/Title';
import { useState } from 'react';
import { Filter } from './Filter/Filter';
import { Itens } from './Itens/Itens';
import { Main, Wrapper, ContainerArrow } from './styles';
import { ArrowBack } from '../../components/Icons/ArrowBack';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from '../../components/AnimatedSection/AnimatedSection';

const Certificates = () => {
  const [filter, setFilter] = useState<number | null>(null);
  const { theme } = useSystemThemeContext();
  const navigate = useNavigate();

  return (
    <Main>
      <Head
        title="Certificados | Kauã Ortolani Lusvarghi"
        description="Página com todos meus certificados"
      />
      <ContainerArrow onClick={() => navigate('/home')}>
        <ArrowBack theme={theme.title} />
      </ContainerArrow>
      <AnimatedSection direction="toDown">
        <Title title="Minhas certificações tech" />
      </AnimatedSection>
      <Wrapper>
        <AnimatedSection direction="toUp">
          <Filter filter={filter} setFilter={setFilter} />
        </AnimatedSection>
        <AnimatedSection direction="toRight">
          <Itens filter={filter} />
        </AnimatedSection>
      </Wrapper>
    </Main>
  );
};

export default Certificates;
