import styled from 'styled-components';
import { Typography } from '../../components/Typography/Typography';
import { Head } from '../../components/Head/Head';

const StyledCertigficates = styled.main``;

export const Certificates = () => {
  return (
    <StyledCertigficates>
      <Head
        title="Certificados | Kauã Ortolani Lusvarghi"
        description="Página com todos meus certificados"
      />
      <Typography>Certificates</Typography>
    </StyledCertigficates>
  );
};

export default Certificates;
