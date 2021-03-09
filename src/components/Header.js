/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

const Header = (props) => {
  const { cartCount } = props;
  const theme = useContext(ThemeContext);
  return (

    <nav className={theme ? 'nav-bar' : 'nav-bar-light'}>
      <Link to="/">
        {' '}
        <div className="logo">
          <img data-testid="img-tag" src="./assets/download (1).jpeg" alt="logo" />
        </div>
      </Link>
      <div className="nav-right">
        <Link to="/allorders">
          {' '}
          <h5 className={theme ? 'all-product-route' : 'all-product-route-white'}> ALL PRODUCTS </h5>
          {' '}
        </Link>
        <div>
          <div className="cart-count">
            <Link to="/cart">
              {' '}
              <h5 className={theme ? 'cart-count-route' : 'cart-count-route-white'}> CART COUNT:</h5>
              {' '}
            </Link>
            <h5 className={theme ? 'cart-count-route' : 'cart-count-route-white'}>
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
