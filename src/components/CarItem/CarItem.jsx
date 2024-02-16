import {
  Item,
  Img,
  CarTitle,
  CarTextTitle,
  CarTextSpan,
  CarTextSubTitle,
  CarTextSubSpan,
} from './CarItem.styled';

export const CarItem = ({ car }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;
  const parseAdress = address.split(',');
  const city = parseAdress[1];
  const country = parseAdress[2];
  return (
    <Item>
      <Img src={img} alt="Car" />
      <CarTitle>
        <CarTextTitle>
          {make} <CarTextSpan>{model}, </CarTextSpan>
          {year}
        </CarTextTitle>
        <CarTextTitle>${rentalPrice}</CarTextTitle>
      </CarTitle>
      <CarTextSubTitle>
        <CarTextSubSpan>{city}</CarTextSubSpan>
        <CarTextSubSpan>{country}</CarTextSubSpan>
        <CarTextSubSpan>{rentalCompany}</CarTextSubSpan>
        <CarTextSubSpan>Premium</CarTextSubSpan>
      </CarTextSubTitle>
      <CarTextSubTitle>
        <CarTextSubSpan>{type}</CarTextSubSpan>
        <CarTextSubSpan>{model}</CarTextSubSpan>
        <CarTextSubSpan>{mileage}</CarTextSubSpan>
        <CarTextSubSpan>{functionalities[0]}</CarTextSubSpan>
      </CarTextSubTitle>
    </Item>
  );
};
