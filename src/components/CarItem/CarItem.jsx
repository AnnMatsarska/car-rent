import { Item, Img } from './CarItem.styled';

export const CarItem = ({ car }) => {
  return (
    <Item>
      <Img src={car.img} alt="Car" />
    </Item>
  );
};
