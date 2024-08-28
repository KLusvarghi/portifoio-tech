import styled from 'styled-components';
import { ToggleThemeButton } from '../../components/Button/ToggleThemeButton';
import { Rocket } from '../../components/Rocket/Rocket';
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import { useRef } from 'react';
import Stack from '../Stack/Stack';
import { Head } from '../../components/Head/Head';

const Main = styled.div``;

const Home = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <Head
        title="Kauã Lusvarghi | Frontend Developer"
        description="Pagina principal"
      />
      <ToggleThemeButton />
      <Rocket refContainer={refContainer} />
      <Introduction refContainer={refContainer} />
      <About />
      <Stack />
    </Main>
  );
};

export default Home;
