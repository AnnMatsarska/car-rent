import {
  Img,
  CarTextSubTitle,
  CarTextSubSpan,
  CarTextSpan,
  CarTextTitle,
  CarTitle,
  CarDescription,
  WrappTitle,
  Conditions,
  Condition,
  BtnTel,
} from './CarInfo.styled';

export const CarInfo = ({ data }) => {
  const {
    car: {
      id,
      img,
      model,
      make,
      year,
      rentalPrice,
      type,
      mileage,
      functionalities,
      fuelConsumption,
      engineSize,
      description,
      accessories,
      rentalConditions,
    },
    city,
    country,
  } = data;
  const parsedRentalConditions = rentalConditions.split('\n');
  const formattedMileage = mileage.toString().replace(/^(\d)/, '$1,');

  return (
    <>
      <Img>
        <img
          src={img}
          alt="car"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Img>
      <CarTitle>
        <CarTextTitle>
          {make} <CarTextSpan>{model}, </CarTextSpan>
          {year}
        </CarTextTitle>
      </CarTitle>
      <CarTextSubTitle>
        <CarTextSubSpan>{city}</CarTextSubSpan>
        <CarTextSubSpan>{country}</CarTextSubSpan>
        <CarTextSubSpan>Id:{id}</CarTextSubSpan>
        <CarTextSubSpan>Year:{year}</CarTextSubSpan>
        <CarTextSubSpan>Type:{type}</CarTextSubSpan>
      </CarTextSubTitle>
      <CarTextSubTitle>
        <CarTextSubSpan>Fuel Consumption:{fuelConsumption}</CarTextSubSpan>
        <CarTextSubSpan>Engine size:{engineSize}</CarTextSubSpan>
      </CarTextSubTitle>
      <CarDescription>{description}</CarDescription>
      <WrappTitle>Accessories and functionalities:</WrappTitle>
      <CarTextSubTitle>
        {accessories.map(item => (
          <CarTextSubSpan key={item}>{item}</CarTextSubSpan>
        ))}
      </CarTextSubTitle>
      <CarTextSubTitle>
        {functionalities.map(item => (
          <CarTextSubSpan key={item}>{item}</CarTextSubSpan>
        ))}
      </CarTextSubTitle>
      <WrappTitle>Rental Conditions:</WrappTitle>
      <Conditions>
        {parsedRentalConditions.map(item => (
          <Condition key={item}>{item}</Condition>
        ))}
        <Condition>
          Mileage:{' '}
          <span
            style={{ fontWeight: '600', color: 'var(--primary-color-blue)' }}
          >
            {formattedMileage}
          </span>
        </Condition>
        <Condition>
          Price:{' '}
          <span
            style={{ fontWeight: '600', color: 'var(--primary-color-blue)' }}
          >
            ${rentalPrice}
          </span>
        </Condition>
      </Conditions>
      <BtnTel href="tel:+380730000000">Rental car</BtnTel>
    </>
  );
};
