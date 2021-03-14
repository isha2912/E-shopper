import React from 'react';
import { screen, render } from '@testing-library/react';

import Allorders from './Allorders';

describe(Allorders.name, () => {
  const mockProps = {
    allOrders: [
      {
        items: [
          {
            id: 1,
            name: 'pp',
            count: 20,
            price: 12,
            category: 'idk',
          },
        ],
        id: 1,
        date: 123,
      },
    ],

  };
  it('should match the snapShot', () => {
    const { container } = render(<Allorders {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
  it('should display Past Orders and headers', () => {
    render(<Allorders {...mockProps} />);
    screen.getByText('Post Orders');
    screen.getByText('Order id');
    screen.getByText('Items');
  });
});
