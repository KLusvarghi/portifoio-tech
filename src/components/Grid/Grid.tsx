import styled from 'styled-components';

export const Container = styled.div`
  /* box-sizing: border-box;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 540px; */
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  /* margin-right: -15px; */
  /* margin-left: -15px; */
  /*
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  flex-flow: wrap; */
`;
export const Col = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  margin-left: 0%;
  left: auto;
  right: auto;
  /* width: 33.3333%; */
  /* flex: 0 0 33.3333%; */
  /* max-width: 33.3333%; */
`;
