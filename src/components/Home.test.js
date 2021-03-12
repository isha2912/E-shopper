/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

describe('Home page contains product components', () => {
  const mockProps = {
    filteredProducts: {
      fruits: [{
        id: 1,
        name: 'apple',
        price: 20,
        quantity: 1,
        count: 2,
      },
      ],
    },
    onIncrement: (() => {}),
    onDecrement: (() => {}),
  };

  afterEach(() => (jest.clearAllMocks()));
  test('Should display all product componenets', () => {
    const container = render(<Home {...mockProps} />);
    expect({ container }).toMatchSnapshot();
  });

  test('should display products', () => {
    render(<Home {...mockProps} />);
    screen.getByText('apple');
    screen.getByText('1 Kg');
    screen.getByText('MRP 20');
    screen.getByText('+');
    screen.getByText('-');
    screen.getByText('2 in Basket');
  });
});
