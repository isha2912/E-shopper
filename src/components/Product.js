/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Counter from './Counter';
import './Product.css';
// import PropTypes from 'prop-types';

const Product = ((props) => (
  <div className="product-container">
    <img className="img-product" src={props.product.image} alt="fruit" height="310px" width="290px" />
    <div>
      {props.product.name}
    </div>
    <div>
      {props.product.price}
    </div>
    <div>
      {props.product.count}
    </div>
    <Counter
      value={props.product.count}
      onIncrement={props.onIncrement}
      onDecrement={props.onDecrement}
    />
  </div>
));

// Product.propTypes = {
//   product: PropTypes.object.isRequired,
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   count: PropTypes.number.isRequired,

// };

export default Product;
