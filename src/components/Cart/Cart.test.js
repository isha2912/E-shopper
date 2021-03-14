/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

describe('Cart page contains product components', () => {
  const mockProps = {
    cartItems: {
      fruits: [{
        name: 'apple',
        quantity: 1,
        price: 20,
        count: 2,
        image: 'apple.jpg',
      }],
    },
    cartCount: 2,
  };
  afterEach(() => jest.clearAllMocks());

  test('Should display table and buttons', () => {
    render(<BrowserRouter><Cart {...mockProps} /></BrowserRouter>);
    screen.getByText('apple');
  });

  test('Should redirect to checkout page', () => {
    render(<BrowserRouter><Cart {...mockProps} /></BrowserRouter>);
    const checkoutPage = screen.getByText('CHECKOUT');
    expect(checkoutPage.tagName).toBe('BUTTON');
    fireEvent.click(checkoutPage);
    expect(document.location.href).toBe('http://localhost/checkout');
  });
  test('Should redirect to Home Page', () => {
    render(<BrowserRouter><Cart {...mockProps} /></BrowserRouter>);
    const homePage = screen.getByText('CONTINUE SHOPPING');
    expect(homePage.tagName).toBe('BUTTON');
    fireEvent.click(homePage);
    expect(document.location.href).toBe('http://localhost/');
  });
});
