import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Item,
  Img,
  CarTitle,
  CarTextTitle,
  CarTextSpan,
  CarTextSubTitle,
  CarTextSubSpan,
  Button,
  BtnHeart,
  NormalHeartIcon,
  ActiveHeartIcon,
} from './CarItem.styled';
import { Modal } from 'components/Modal/Modal';
import { CarInfo } from './CarInfo/CarInfo';

import { selectFavoritesAdverts } from 'redux/car/selectors';
import { addFavoriteCar, deleteFavoriteCar } from '../../redux/car/carSlice';

export const CarItem = ({ car }) => {
  const {
    id,
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

  const [isOpen, setTeamModalOpen] = useState(false);
  const favorites = useSelector(selectFavoritesAdverts);
  const dispatch = useDispatch();

  const parseAdress = address.split(',');
  const city = parseAdress[1];
  const country = parseAdress[2];

  const isFavoriteCar = id => favorites.some(car => car.id === id);
  const handleToggle = () => {
    if (isFavoriteCar(id)) {
      dispatch(deleteFavoriteCar(car.id));
    } else {
      dispatch(addFavoriteCar(car));
    }
  };

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
      <BtnHeart type="button" onClick={handleToggle}>
        {' '}
        {isFavoriteCar(id) ? <ActiveHeartIcon /> : <NormalHeartIcon />}
      </BtnHeart>
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
          <CarInfo data={{ car, city, country }} />
        </Modal>
      )}
    </Item>
  );
};
