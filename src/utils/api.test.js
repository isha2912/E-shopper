import axios from 'axios';
import utilsApi from './api';
import { mockProducts, mockOrders, mockPostOrder } from '../mockData/api';

describe('test api calls', () => {
  let axiosGetMock;
  let axiosPostMock;

  beforeEach(() => {
    axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockClear();
    axiosGetMock.mockResolvedValue({ data: null });

    axiosPostMock = jest.spyOn(axios, 'post');
    axiosPostMock.mockClear();
    axiosPostMock.mockResolvedValue({ data: null });
  });

  describe(utilsApi.getItems.name, () => {
    test('should get items from GET /items', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: [] } });
      await utilsApi.getItems();
      expect(axiosGetMock).toHaveBeenCalledWith('/items');
    });
    test('should return items', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: mockProducts } });
      const orders = await utilsApi.getItems();
      expect(orders).toEqual(mockProducts);
    });
  });
  describe(utilsApi.getOrders.name, () => {
    test('should get post from GET /orders', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: [] } });
      await utilsApi.getOrders();
      expect(axiosGetMock).toHaveBeenCalledWith('/orders');
    });
    test('should return orders array', async () => {
      axiosGetMock.mockResolvedValue({ data: { data: mockOrders } });
      const orders = await utilsApi.getOrders();
      expect(orders).toEqual(mockOrders);
    });
  });
  describe(utilsApi.postOrders.name, () => {
    test('should post order from POST /orders', async () => {
      axiosPostMock.mockResolvedValue({});
      await utilsApi.postOrders(mockPostOrder);
      expect(axiosPostMock).toHaveBeenCalledWith('/orders', mockPostOrder);
    });
    test('should return items object', async () => {
      axiosPostMock.mockResolvedValue({ mockPostOrder });
      const postOrder = await utilsApi.postOrders(mockPostOrder);
      expect(postOrder).toEqual(mockPostOrder);
    });
  });
});
