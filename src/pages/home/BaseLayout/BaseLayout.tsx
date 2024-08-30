import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { IChildrenProps } from '../../../types/auxProps';
import { ToggleThemeButton } from '../../../components/Button/ToggleThemeButton';

const BaseLayout = ({ children }: IChildrenProps) => {

  return (
    <>
      <Header />
      <ToggleThemeButton />
      <Outlet />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
