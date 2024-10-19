import { useEffect, useState, useCallback } from 'react';
import certificatesApi from '../../../api/certificatesApi.json';
import styled from 'styled-components';
import { Item } from './Item/Item';
import Spinner from '../../../components/Spinner/Spinner';

const ContainerItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 36px;
  margin-bottom: 60px;
`;

interface IItensProps {
  filter: number | null;
  onSelectedPhoto: (photo: number) => void;
}

export const Itens = ({ filter, onSelectedPhoto }: IItensProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(certificatesApi);

  const filterTest = useCallback(
    (ids: number[]) => {
      if (filter !== null) return ids.some((id) => filter === id);
      return true;
    },
    [filter],
  );

  useEffect(() => {
    setIsLoading(true);
    const newList = certificatesApi.filter((item) =>
      filterTest(item.category ? item.category.id : [1]),
    );

    setTimeout(() => {
      setList(newList);
      setIsLoading(false);
    }, 1500);
  }, [filterTest]);

  return (
    <ContainerItens>
      {isLoading ? (
        <Spinner />
      ) : (
        list.map((item) =>
          item.id && item.name ? (
            <Item
              onSelectedZoom={onSelectedPhoto}
              key={item.id}
              id={item.id}
              name={item.name}
            />
          ) : null,
        )
      )}
    </ContainerItens>
  );
};
