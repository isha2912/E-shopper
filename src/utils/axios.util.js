import axios from 'axios';

const getData = async (path) => {
  const order = await axios.get(path);
  return order.data;
};

const postData = async (path, data) => {
  const response = await axios.post('/orders', data);
  return response.data;
};

export { getData, postData };
