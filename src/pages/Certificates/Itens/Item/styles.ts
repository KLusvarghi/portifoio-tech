import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 6px 8px; */
`;

export const Image = styled.img`
  max-height: 120px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 0px;
    transform: scale(1.525);
  }
`;
