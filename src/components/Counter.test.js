/* eslint-disable react/jsx-props-no-spreading */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe(Counter.name, () => {
  const mockProp = {
    value: 0,
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should display the current count', () => {
    render(<Counter {...mockProp} />);

    expect(screen.getByText('+'));
    expect(screen.getByText('0 in Basket'));
    expect(screen.getByText('-'));
  });
  test('should match snapshot', () => {
    const { container } = render(<Counter {...mockProp} />);

    expect(container).toMatchSnapshot();
  });

  test('Should increment value onIncrement', () => {
    render(<Counter {...mockProp} />);

    const incrementCount = screen.getByText('+');
    expect(incrementCount.tagName).toBe('BUTTON');
  });
  test('Should decrement value onDecrement', () => {
    render(<Counter {...mockProp} />);

    const incrementCount = screen.getByText('-');
    expect(incrementCount.tagName).toBe('BUTTON');
  });

  test('Should decrement value onDecrement', () => {
    render(<Counter {...mockProp} />);

    const decrementCount = screen.getByText('-');
    fireEvent.click(decrementCount);
    expect(mockProp.onDecrement).toHaveBeenCalled();
  });

  test('Should Increment value onIncrement', () => {
    render(<Counter {...mockProp} />);

    const incrementCount = screen.getByText('+');
    fireEvent.click(incrementCount);
    expect(mockProp.onIncrement).toHaveBeenCalled();
  });
});
