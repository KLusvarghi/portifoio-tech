import styled from 'styled-components';
import { Button } from '../../../components/Button/Button';
import filterApi from './filter.json';

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
  padding: 10px 22px;
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
          isActive={filter === option.id}
          variant="filter"
          onClick={() => {
            selectFilter(option);
          }}
          key={option.id}
        >
          {option.label}
        </Button>
      ))}
    </ContainerFilter>
  );
};
