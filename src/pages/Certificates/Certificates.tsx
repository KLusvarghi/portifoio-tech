import { Head } from '../../components/Head/Head';
import { Title } from '../../components/Typography/Title';
// import certificatesApi from '../../api/certificatesApi.json';
// import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { Filter } from './Filter/Filter';
import { Itens } from './Itens/Itens';
import { Main, Wrapper } from './styles';

const Certificates = () => {
  const [filter, setFilter] = useState<number | null>(null);
  // const [visibleItems, setVisibleItems] = useState(17);
  // const increment = 17;

  // const showMoreItems = () => {
  //   setVisibleItems((prev) =>
  //     Math.min(prev + increment, certificatesApi.length),
  //   );
  // };

  return (
    <Main>
      <Head
        title="Certificados | Kauã Ortolani Lusvarghi"
        description="Página com todos meus certificados"
      />
      <Title title="Minhas certificações tech" />
      <Wrapper>
        <Filter filter={filter} setFilter={setFilter} />
        <Itens filter={filter} />


        {/* {visibleItems < certificatesApi.length && (
          <Button variant="project" onClick={showMoreItems}>
            Ver mais certificados
          </Button>
        )} */}
      </Wrapper>
    </Main>
  );
};

export default Certificates;
