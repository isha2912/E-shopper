/* eslint-disable no-unused-vars */
import React from 'react';
import {
  screen, render, waitFor, fireEvent,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axiosUtil from './utils/api';
import {
  mockOrderedOrder, mockOrders, mockPostOrder, mockProducts,
} from './mockData/api';
import App from './App';

describe(App.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    jest.spyOn(axiosUtil, 'getItems').mockResolvedValue(mockProducts);
    jest.spyOn(axiosUtil, 'getOrders').mockResolvedValue(mockOrders);
    jest.spyOn(axiosUtil, 'postOrders').mockResolvedValue(mockPostOrder);
  });

  test('Should match the snapshot', async () => {
    const { container } = await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    expect(container).toMatchSnapshot();
  });

  test('Should render header component', async () => {
    const spyProd = jest.spyOn(axiosUtil, 'getItems').mockResolvedValue(mockProducts);
    await waitFor(() => render(<BrowserRouter><App /></BrowserRouter>));
    const allProducts = screen.getByText('ALL PRODUCTS');
    await waitFor(() => { fireEvent.click(allProducts); });
  });

  test('should render home-page when clicked on logo', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const eShopper = screen.getByTestId('img-tag');

    // screen.logTestingPlaygroundURL();

    await waitFor(() => { fireEvent.click(eShopper); });

    expect(document.location.href).toBe('http://localhost/');
    screen.getByText('apple');
  });

  // test('should render AllOrders page when clicked on AllOrders', async () => {
  //   await waitFor(() => render(
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>,
  //   ));
  //   const allProductLink = screen.getByText('ALL PRODUCTS');
  //   await waitFor(() => fireEvent.click(allProductLink));
  //   expect(document.location.href).toBe('http://localhost/allorders');
  // });

  test('should render cart-page when clicked on Cart-Items', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const cartLink = screen.getByText('CART COUNT:');
    fireEvent.click(cartLink);
    expect(document.location.href).toBe('http://localhost/cart');
    screen.getByTestId('cart');
  });
});
