import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1680px;
  margin: 40px auto 0;
  padding: 0 84px;

  @media (max-width: 1060px) {
    padding: 0 46px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 36px;
  /* background: ${(props) => props.theme.colors.form.a}; */
  background: #071225;
  border-radius: 100px;
  padding: 10px 22px;
`;

export const Li = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 6px 8px;
  transition: 0.2s ease-in;

  &:hover {
    background: ${(props) => props.theme.colors.form.a};
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const ContainerCertificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: 120px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 0px;
    transform: scale(2);
  }
`;
