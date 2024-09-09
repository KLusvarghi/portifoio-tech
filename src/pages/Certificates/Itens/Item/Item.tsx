import { Image } from '../../Image/Image';

interface IItemProps {
  id: number;
  name: string;
  onSelectedZoom: (id: number) => void;
}

export const Item = ({ id, onSelectedZoom }: IItemProps) => {
  return (
    <div onClick={() => onSelectedZoom(id)}>
      <Image photo={id} />
    </div>
  );
};
