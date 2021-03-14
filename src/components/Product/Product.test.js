/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe('Should display the product card ', () => {
  const mockProduct = {
    product: {
      image: 'apple.jpg',
      name: 'apple',
      quantity: 1,
      price: 20,
      count: 1,
    },
    onDecrement: jest.fn(),
    onIncrement: jest.fn(),
  };
  test('should match snapshot', () => {
    const { container } = render(<Product {...mockProduct} />);

    expect(container).toMatchSnapshot();
  });
  test('should display product name', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('apple');
  });
  test('should display product quantity', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('1 Kg');
  });
  test('should display product price', () => {
    render(<Product {...mockProduct} />);
    screen.getByText('MRP 20');
  });
  test('should display product image', () => {
    render(<Product {...mockProduct} />);
    screen.getByTestId('card-img');
  });
});
