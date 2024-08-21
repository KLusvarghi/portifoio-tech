import styled from 'styled-components';
import { Typography } from './Typography';

interface ITitlePorps {
  title: string;
  subtitle: string;
}

const StyledContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 70%;
  margin: 0 auto;
`;
const Separator = styled.span`
  background: ${(props) => props.theme.colors.primaries.a};
  width: 58px;
  height: 5px;
  border-radius: 5px;
  margin: 10px 0 22px;
`;

export const Title = ({ title, subtitle }: ITitlePorps) => {
  return (
    <StyledContainer>
      <Typography variant="h1">{title}</Typography>
      <Separator />
      <Typography variant="h3">{subtitle}</Typography>
    </StyledContainer>
  );
};
