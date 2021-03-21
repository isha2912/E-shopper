import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1337';
const getItems = async () => {
  try {
    const allItems = await axios.get('/items', { headers: { 'Access-Control-Allow-Origin': '*' } });
    console.log(allItems.data.data);
    return allItems.data.data;
  } catch (error) {
    return error;
  }
};
const getOrders = async () => {
  try {
    const allOrders = await axios.get('/orders', { headers: { 'Access-Control-Allow-Origin': '*' } });
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
const groupByCategory = (items) => items.reduce((acc, product) => {
  const newProduct = {
    ...product,
    quantity: 0,
    stock: product.count,
    count: 0,
  };
  const { category } = product;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(newProduct);
  return acc;
}, {});
export default {
  getItems, getOrders, postOrders, groupByCategory,
};
