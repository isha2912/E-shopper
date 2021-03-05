import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import './Product.css';

const Product = ((props) => {
  const { product } = props;
  const { onDecrement } = props;
  const { onIncrement } = props;

  return (
    <div className="product-container">
      <img className="img-product" src={product.image} alt="fruit" />
      <div>
        {product.name}
      </div>
      <div>
        {product.price}
      </div>
      <div>
        {product.quantity}
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
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,

};
