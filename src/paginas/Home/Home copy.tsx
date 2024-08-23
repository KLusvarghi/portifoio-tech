// import styled from 'styled-components';
// import { ToggleThemeButton } from '../../components/Button/ToggleThemeButton';
// import UseWindowSize from '../../hooks/useWindowSize';
// import { Rocket } from '../../components/Rocket/Rocket';
// import Introduction from '../Introduction/Introduction';
// import About from '../About/About';
// import { useRef } from 'react';
// import useWindowPositionY from '../../hooks/useWindowPositionY';

// const Main = styled.div``;

// const Home = () => {
//   const homeRef = useRef<HTMLDivElement | null>(null);
//   const rocketRef = useRef<HTMLDivElement | null>(null);
//   const width = UseWindowSize();
//   const pageY = useWindowPositionY();

//   const handleChange = () => {
//     const introContainer = homeRef.current?.offsetHeight;
//     if (introContainer && pageY >= introContainer) {
//       if (rocketRef.current) {
//         rocketRef.current.style.display = 'block';
//       }
//     } else {
//       if (rocketRef.current) {
//         rocketRef.current.style.display = 'none';
//       }
//     }
//   };

//   const scrollToTop = () => {
//     homeRef.current?.scrollIntoView({ behavior: 'smooth' });
//     if (rocketRef.current) {
//       rocketRef.current.style.display = 'none';
//     }
//   };

//   window.addEventListener('scroll', handleChange);

//   return (
//     <Main>
//       {width >= 600 && (
//         <>
//           <ToggleThemeButton />
//           <Rocket ref={rocketRef} onClick={scrollToTop} />
//           {/* {visible && ( */}
//           {/* )} */}
//         </>
//       )}
//       <Introduction homeRef={homeRef} />
//       <About />
//     </Main>
//   );
// };

// export default Home;
