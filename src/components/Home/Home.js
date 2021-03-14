import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './Home.css';

const Home = ({ filteredProducts, onIncrement, onDecrement }) => (
  <div>
    {Object.keys(filteredProducts).map((category) => (
      <div key={category} className="row">
        <h1>{category}</h1>
        <div className="all-products">
          {filteredProducts[category].map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={() => onIncrement(product.id, category)}
              onDecrement={() => onDecrement(product.id, category)}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);
export default Home;

Home.propTypes = {
  filteredProducts: PropTypes.shape({
    category: PropTypes.arrayOf(
      PropTypes.shape({
        stock: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
Home.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
