import { Head } from '../../components/Head/Head';
import { Title } from '../../components/Typography/Title';
import { useState } from 'react';
import { Filter } from './Filter/Filter';
import { Itens } from './Itens/Itens';
import { Main, Wrapper, ContainerArrow } from './styles';
import { ArrowBack } from '../../components/Icons/ArrowBack';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { useNavigate } from 'react-router-dom';

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
      <Title title="Minhas certificações tech" />
      <Wrapper>
        <Filter filter={filter} setFilter={setFilter} />
        <Itens filter={filter} />
      </Wrapper>
    </Main>
  );
};

export default Certificates;
