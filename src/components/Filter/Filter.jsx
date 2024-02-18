import { selectFilters } from 'redux/filter/filterSelector';
import { setCarFilters } from 'redux/filter/filterSlice';

import { generateDropdownPrice } from 'utils/generatePrices';
import { makes } from 'data/makes';
import { Dropdown } from 'components/Dropdown/Dropdown';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Btn,
  CustomArrow,
  Form,
  FormItemWrapper,
  FromTo,
  FromToContainer,
  InvalidErrorMessage,
  Label,
  MilageWrapper,
  MileageContainer,
  Selector,
  SelectorItem,
  SelectorWrapper,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { brand, price, mileageFrom, mileageTo } = useSelector(selectFilters);
  const [brandSelect, setBrandSelect] = useState(brand);
  const [priceSelect, setPriceSelect] = useState(price);
  const [mileageFromSelect, setMileageFromSelect] = useState(mileageFrom);
  const [mileageToSelect, setMileageToSelect] = useState(mileageTo);
  const [isValid, setIsValid] = useState(true);

  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  useEffect(() => {
    setBrandSelect(brand);
    setPriceSelect(price);
    setMileageFromSelect(mileageFrom);
    setMileageToSelect(mileageTo);
  }, [brand, mileageFrom, mileageTo, price]);

  useEffect(() => {
    dispatch(
      setCarFilters({
        brand: searchParams.get('brand'),
        price: Number.parseInt(searchParams.get('price')),
        mileageFrom: Number.parseInt(searchParams.get('mileageFrom')),
        mileageTo: Number.parseInt(searchParams.get('mileageTo')),
      })
    );
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (
      mileageFromSelect &&
      mileageToSelect &&
      parseInt(mileageFromSelect) > parseInt(mileageToSelect)
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [mileageFromSelect, mileageToSelect]);

  const handleSubmit = event => {
    event.preventDefault();

    const brand = brandSelect || '';
    const price = priceSelect || '';
    const mileageFrom = mileageFromSelect || '';
    const mileageTo = mileageToSelect || '';
    setSearchParams({ brand, price, mileageFrom, mileageTo });
  };

  const handleBrandSelect = event => {
    setBrandSelect(event.target.attributes.value.value);
    setIsBrandDropdownOpen(false);
  };

  const handlePriceSelect = event => {
    setPriceSelect(event.target.attributes.value.value);
    setIsPriceDropdownOpen(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Label>Car brand</Label>
        <SelectorWrapper>
          <Selector
            onClick={() => {
              setIsBrandDropdownOpen(!isBrandDropdownOpen);
            }}
            width="224px"
          >
            {brandSelect || 'Enter the text'}
          </Selector>
          <CustomArrow $isOpen={isBrandDropdownOpen} />
          {isBrandDropdownOpen && (
            <Dropdown
              close={() => {
                setIsBrandDropdownOpen(false);
              }}
            >
              <ul>
                {makes.map(item => (
                  <SelectorItem
                    onClick={handleBrandSelect}
                    key={item}
                    value={item}
                    $isActive={brandSelect === item}
                  >
                    {item}
                  </SelectorItem>
                ))}
              </ul>
            </Dropdown>
          )}
        </SelectorWrapper>
      </label>
      <label>
        <Label>Price/ 1 hour</Label>
        <SelectorWrapper>
          <Selector
            onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
            width="125px"
          >
            {`${priceSelect ? priceSelect : 'To'} $`}
          </Selector>
          <CustomArrow $isOpen={isPriceDropdownOpen} />
          {isPriceDropdownOpen && (
            <Dropdown
              close={() => {
                setIsPriceDropdownOpen(false);
              }}
            >
              <ul>
                {generateDropdownPrice(10, 500, 10).map(price => (
                  <SelectorItem
                    onClick={handlePriceSelect}
                    value={price}
                    key={price}
                    $isActive={parseInt(priceSelect) === price}
                  >
                    {price}
                  </SelectorItem>
                ))}
              </ul>
            </Dropdown>
          )}
        </SelectorWrapper>
      </label>
      <MileageContainer>
        <Label>Car mileage / km</Label>
        <FromToContainer>
          <FormItemWrapper>
            <FromTo>From</FromTo>
            <MilageWrapper
              name="minMileage"
              id="minMileage"
              value={mileageFromSelect || ''}
              onChange={e => setMileageFromSelect(e.target.value)}
              $side="left"
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <FromTo>To</FromTo>
            <MilageWrapper
              type="number"
              name="maxMileage"
              id="maxMileage"
              value={mileageToSelect || ''}
              onChange={e => setMileageToSelect(e.target.value)}
              $side="right"
            />
          </FormItemWrapper>
        </FromToContainer>
        {!isValid && (
          <InvalidErrorMessage>
            'To' value should be equal to or greater than 'From'.
          </InvalidErrorMessage>
        )}
      </MileageContainer>
      <Btn disabled={!isValid}>Search</Btn>
    </Form>
  );
};
