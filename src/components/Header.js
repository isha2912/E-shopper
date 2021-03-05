/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { cartCount } = this.props;
    return (

      <nav className="nav-bar">
        <Link to="/">
          {' '}
          <div>Logo</div>
        </Link>
        <div>
          <Link to="/cart">  CART COUNT: </Link>
          {cartCount}
          {' '}
        </div>
      </nav>
    );
  }
}

Header.proptype = {
  cartCount: PropTypes.number.isRequired,
};
export default Header;
