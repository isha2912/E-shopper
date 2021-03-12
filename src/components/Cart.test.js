import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Cart';

xdescribe('Cart page contains product components', () => {
  const mockProps = {
    cartItems: [{
      name: 'apple',
      quantity: 1,
      price: 20,
      count: 2,
      image: 'apple.jpg',
    }],
    cartCount: 2,
  };
  afterEach(() => jest.clearAllMocks());

  test('Should display table and buttons', () => {
    render(<BrowserRouter><Cart {...mockProps} /></BrowserRouter>);
    screen.getByText('apple');
  });
});
