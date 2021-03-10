import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from './Home';

describe('Home page contains product components', () => {
  const mockProps = {
    key: 1,
    products: [{
      id: 1,
      name: 'apple',
      quantity: 1,
      price: 20,
      count: 2,
      image: 'apple.jpg',
    }],
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
  });
});
