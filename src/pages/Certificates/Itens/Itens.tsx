import { useEffect, useState, useCallback } from 'react';
import certificatesApi from '../../../api/certificatesApi.json';
import styled from 'styled-components';
import { Item } from './Item/Item';

const ContainerItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px;
  margin-bottom: 60px;
`;

export const Itens = ({ filter }: { filter: number | null }) => {
  const [list, setList] = useState(certificatesApi);

  const filterTest = useCallback(
    (id: number) => {
      if (filter !== null) return filter === id;
      return true;
    },
    [filter],
  );

  useEffect(() => {
    const newList = certificatesApi.filter((item) =>
      filterTest(item.category.id),
    );
    setList(newList);
  }, [filterTest]);

  return (
    <ContainerItens>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ContainerItens>
  );
};
