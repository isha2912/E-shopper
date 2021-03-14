/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';
import './Product.scss';

const Product = ((props) => {
  const { product } = props;
  const { onDecrement } = props;
  const { onIncrement } = props;

  return (
    <div className="product-container">
      <img className="img-product" src="assets/banana.png" alt="fruit" />
      <div data-testid="card-img" className="product-name">
        {product.name}
      </div>
      <div className="product-quantity">
        {product.quantity}
        {' '}
        Kg

      </div>
      <div className="product-price">
        MRP
        {' '}
        {product.price}
      </div>
      <Counter
        value={product.count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
});

export default Product;

Product.propTypes = {
  product: PropTypes.shape({

    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,

};
