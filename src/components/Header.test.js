/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Should display the nav bar', () => {
  const mockProp = {
    cartCount: 0,
  };
  afterEach(() => jest.clearAllMocks());

  it('Should display logo, cart count and All products', () => {
    const { container } = render(
      <BrowserRouter>
        <Header {...mockProp} />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('Should take to Home page on click', () => {
    render(
      <BrowserRouter>
        <Header {...mockProp} />
      </BrowserRouter>,
    );
    const logoLink = screen.getByTestId('img-tag');
    fireEvent.click(logoLink);
    expect(document.location.href).toBe('http://localhost/');
  });
  it('Should take to Cart page on click', () => {
    render(
      <BrowserRouter>
        <Header {...mockProp} />
      </BrowserRouter>,
    );
    const cartLink = screen.getByText('CART COUNT:');
    fireEvent.click(cartLink);
    expect(document.location.href).toBe('http://localhost/cart');
  });
  it('Should take to All product page on click', () => {
    render(
      <BrowserRouter>
        <Header {...mockProp} />
      </BrowserRouter>,
    );
    const allProductLink = screen.getByText('ALL PRODUCTS');
    fireEvent.click(allProductLink);
    expect(document.location.href).toBe('http://localhost/allorders');
  });
});
