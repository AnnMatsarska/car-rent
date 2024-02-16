import { useState } from 'react';
import {
  Item,
  Img,
  CarTitle,
  CarTextTitle,
  CarTextSpan,
  CarTextSubTitle,
  CarTextSubSpan,
  Button,
} from './CarItem.styled';
import { Modal } from 'components/Modal/Modal';
import { CarInfo } from './CarInfo/CarInfo';

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

  const [isOpen, setTeamModalOpen] = useState(false);
  const openModal = () => {
    setTeamModalOpen(true);
    document.body.classList.add('body-scroll-lock');
  };

  const closeModal = () => {
    setTeamModalOpen(false);
    document.body.classList.remove('body-scroll-lock');
  };
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
      <Button type="button" onClick={openModal}>
        Learn more
      </Button>
      {isOpen && (
        <Modal onClose={closeModal}>
          <CarInfo car={car} />
        </Modal>
      )}
    </Item>
  );
};
