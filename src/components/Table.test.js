import React from 'react';
import { screen, render } from '@testing-library/react';
import Table from './Table';

describe('Table component', () => {
  const mockProp = {
    cartItems: {
      fruits: [{
        id: 1,
        name: 'apple',
        price: 10,
        count: 2,
        quantity: 2,
      }],
    },
    className: 'table',
  };
  afterEach(() => jest.clearAllMocks());
  test('Should display table components ', () => {
    const container = render(<Table {...mockProp} />);
    expect({ container }).toMatchSnapshot();
  });
  test('Should display product details', () => {
    render(<Table {...mockProp} />);
    screen.getByText('apple');
    screen.getByText('10');
    screen.getByText('4');
    screen.logTestingPlaygroundURL();
  });
});
