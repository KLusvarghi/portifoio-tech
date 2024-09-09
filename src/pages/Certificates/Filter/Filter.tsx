import styled from 'styled-components';
import filterApi from './filter.json';
import { Button } from '../../../components/Button/Button';

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

type IOpcao = (typeof filterApi)[0];

const ContainerFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 22px;
  margin-bottom: 40px;
  border-radius: 100px;
`;

export const Filter = ({ filter, setFilter }: Props) => {
  const selectFilter = (option: IOpcao) => {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  };

  return (
    <ContainerFilter>
      {filterApi.map((option) => (
        <Button
          key={option.id}
          variant="filter"
          active={filter === option.id}
          onClick={() => {
            selectFilter(option);
          }}
        >
          {option.label}
        </Button>
      ))}
    </ContainerFilter>
  );
};
