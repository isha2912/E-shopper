/* eslint-disable no-unused-vars */
import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { getData, postData } from './utils/axios.util';
import App from './App';

jest.mock('./utils/axios.util');
describe('Should render different Components', () => {
  const cartItems = {
    fruits: [{
      id: 1, name: 'apple', count: 1, price: 10,
    }],
  };

  const finOrder = [{
    id: 1, name: 'apple', count: 1, price: 10,
  }];

  const getMock = {
    data: [
      {
        id: 1,
        name: 'apple',
        price: 120,
        count: 20,
        category: 'Fruits & Vegatables',
      },
    ],
  };

  test('Should call axios', async () => {
    await waitFor(() => render(<App />));

    expect(getData).toHaveBeenCalled();

    screen.getByText('Theme change');
  });

  test('Should render Header page', () => {
    render(<App />);
    screen.getByTestId('img-tag');
  });
});
