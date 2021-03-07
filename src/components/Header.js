/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { cartCount } = props;
  return (

    <nav className="nav-bar">
      <Link to="/">
        {' '}
        <div className="logo">
          <img src="./assets/download (1).jpeg" alt="logo" />
        </div>
      </Link>
      <div className="nav-right">
        <Link to="/allorders">
          {' '}
          <h5 className="all-product-route"> ALL PRODUCTS </h5>
          {' '}
        </Link>
        <div>
          <div className="cart-count">
            <Link to="/cart">
              {' '}
              <h5 className="cart-count-route"> CART COUNT:</h5>
              {' '}
            </Link>
            <h5 className="cart-count-route">
              {' '}
              {cartCount}
              {' '}
            </h5>
          </div>
          {' '}
        </div>
      </div>
    </nav>
  );
};

Header.proptype = {
  cartCount: PropTypes.number.isRequired,
};
export default Header;
