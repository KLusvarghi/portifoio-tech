import styled from 'styled-components';
import { ToggleThemeButton } from '../../components/Button/ToggleThemeButton';
import { Rocket } from '../../components/Rocket/Rocket';
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import { useRef } from 'react';

const Main = styled.div`
`;

const Home = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <ToggleThemeButton />
      <Rocket refContainer={refContainer} />
      <Introduction refContainer={refContainer} />
      <About />
    </Main>
  );
};

export default Home;
