import styled from 'styled-components';
import { useRef } from 'react';

import { Head } from '../../components/Head/Head';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Stack from './Stack/Stack';
import Contact from './Contact/Contact';
import UseWindowSize from '../../hooks/useWindowSize';
import { Rocket } from '../../components/Rocket/Rocket';
import Projects from './Projects/Projects';

const Main = styled.div``;

const Home = () => {
  const width = UseWindowSize();
  const refContainer = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <Head
        title="Kauã Lusvarghi | Frontend Developer"
        description="Pagina principal"
      />
      <Rocket refContainer={refContainer} />
      <Introduction refContainer={refContainer} />
      <About width={width} />
      <Stack width={width} />
      <Projects />
      <Contact />
    </Main>
  );
};

export default Home;
