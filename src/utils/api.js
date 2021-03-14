import axios from 'axios';

const getItems = async () => {
  try {
    const allItems = await axios.get('/items');
    return allItems.data.data;
  } catch (error) {
    return error;
  }
};
const getOrders = async () => {
  try {
    const allOrders = await axios.get('/orders');
    return allOrders.data.data;
  } catch (error) {
    return error;
  }
};
const postOrders = async (orders) => {
  try {
    const allOrders = await axios.post('/orders', orders);
    console.log((allOrders));
    return allOrders.mockPostOrder;
  } catch (error) {
    return error;
  }
};
export default { getItems, getOrders, postOrders };
