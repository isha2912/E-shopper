/* eslint-disable no-unused-vars */
import React from 'react';
import {
  screen, render, waitFor, fireEvent, waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axiosUtil from './utils/api';
import {
  mockOrderedOrder, mockOrders, mockPostOrder, mockProducts,
} from './mockData/api';
import App from './App';
import Counter from './components/Counter/Counter';

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

  xtest('should render AllOrders page when clicked on AllOrders', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const allProductLink = screen.getByText('ALL PRODUCTS');
    await waitFor(() => fireEvent.click(allProductLink));
    expect(document.location.href).toBe('http://localhost/allorders');
  });

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

  test('should increment value on click', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const eShopper = screen.getByTestId('img-tag');
    await waitFor(() => { fireEvent.click(eShopper); });

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
  });
  test('should decrement value on click', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    ));
    const eShopper = screen.getByTestId('img-tag');
    await waitFor(() => { fireEvent.click(eShopper); });

    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    await waitFor(() => render(
      <Counter />,
    ));
    screen.getByText('0 in Basket');
  });
  test('Should render checkout page on click of checkout button', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
        {' '}

      </BrowserRouter>,
    ));
    const cartCount = screen.getByText('CART COUNT:');
    await waitFor(() => { fireEvent.click(cartCount); });
    const checkout = screen.getByText('CHECKOUT');
    await waitFor(() => { fireEvent.click(checkout); });
    expect(document.location.href).toBe('http://localhost/checkout');
    screen.getByText('Submit');
  });

  test('Should render Home on click of continue shopping button', async () => {
    await waitFor(() => render(
      <BrowserRouter>
        <App />
        {' '}

      </BrowserRouter>,
    ));
    const cartCount = screen.getByText('CART COUNT:');
    await waitFor(() => { fireEvent.click(cartCount); });
    const continueShop = screen.getByText('CONTINUE SHOPPING');
    await waitFor(() => { fireEvent.click(continueShop); });
    expect(document.location.href).toBe('http://localhost/');
    screen.getByText('apple');
  });
  test('should not get items', async () => {
    const mockReject = { data: null, error: 'error' };
    jest.spyOn(axiosUtil, 'getItems').mockRejectedValue(mockReject);
    const product = screen.queryByText('apple');
    expect(product).toBeNull();
  });
});
