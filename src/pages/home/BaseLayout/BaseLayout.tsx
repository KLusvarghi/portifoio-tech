import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';
import { IChildrenProps } from '../../../types/auxProps';

const BaseLayout = ({ children }: IChildrenProps) => {

  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
