import axios from 'axios';
import { filterCars } from '../utils/filterCars';

axios.defaults.baseURL = 'https://65395de9e3b530c8d9e85344.mockapi.io';

export const fetchAllCars = async (page, limit) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
  return data;
};

export const fetchByBrand = async ({
  brand,
  price,
  mileageFrom,
  mileageTo,
}) => {
  const queryParams = {
    make: brand || '',
  };

  const response = await axios.get('/adverts', { params: queryParams });
  const result = filterCars(response.data, { price, mileageFrom, mileageTo });

  return result;
};
