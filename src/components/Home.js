import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from './Product';
import './Home.css';

const Home = (props) => {
  const { products, onIncrement, onDecrement } = props;
  return (
    <div className="all-products">
      {products.map((eachProduct) => (
        <Product
          key={eachProduct.id}
          product={eachProduct}
          onIncrement={() => onIncrement(eachProduct.id)}
          onDecrement={() => onDecrement(eachProduct.id)}
        />
      ))}
    </div>

  );
};

export default withRouter(Home);
Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      price: PropTypes.number,
      count: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
