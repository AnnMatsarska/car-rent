import axios from 'axios';

axios.defaults.baseURL = 'https://65395de9e3b530c8d9e85344.mockapi.io';

export const fetchAllCars = async (page = 1) => {
  const { data } = await axios.get(`/adverts?page=${page}&limit=12`);
  return data;
};
