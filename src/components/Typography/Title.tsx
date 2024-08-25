import styled, { css } from 'styled-components';
import { Typography } from './Typography';

interface ITitlePorps {
  title: string;
  subtitle: string;
  position?: 'flex-start' | 'center';
}

interface IStyledthemeProps {
  $position?: 'flex-start' | 'center';
}

const ContainerTitle = styled.span<IStyledthemeProps>`
  display: flex;
  flex-direction: column;
  ${(props) => {
    switch (props.$position) {
      case 'center':
        return css`
          justify-content: center;
          align-items: center;
        `;
      default:
        return css`
          align-items: flex-start;
        `;
    }
  }}
`;

const Separator = styled.span`
  background: ${(props) => props.theme.colors.primaries.a};
  width: 58px;
  height: 5px;
  border-radius: 5px;
  margin: 10px 0 22px;
`;

export const Title = ({
  title,
  subtitle,
  position = 'center',
}: ITitlePorps) => {

  return (
    <ContainerTitle $position={position}>
      <Typography variant="title">{title}</Typography>
      <Separator />
      <Typography variant="subtitle">{subtitle}</Typography>
    </ContainerTitle>
  );
};
