import axios from 'axios';

const BASE_URL = 'https://t4bedrnjzk.execute-api.ap-southeast-1.amazonaws.com';


export const postCustomerDetails = async (data) => {
  return await axios.post(`${BASE_URL}/customer`, data);
};
