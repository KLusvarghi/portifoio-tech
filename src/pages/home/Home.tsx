import styled from 'styled-components';
import { ToggleThemeButton } from '../../components/Button/ToggleThemeButton';
import { Rocket } from '../../components/Rocket/Rocket';
import { Head } from '../../components/Head/Head';
import { useRef } from 'react';
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Stack from './Stack/Stack';
import Contact from './Contact/Contact';
import UseWindowSize from '../../hooks/useWindowSize';
import Projects from './Projects/Projects';

const Main = styled.div``;

const Home = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const width = UseWindowSize();

  return (
    <Main>
      <Head
        title="Kauã Lusvarghi | Frontend Developer"
        description="Pagina principal"
      />
      <ToggleThemeButton />
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
