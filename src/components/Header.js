/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <nav className="nav-bar">
        <div>Logo</div>
        <div>
          CART COUNT:
          {this.props.cartCount}
          {' '}
        </div>
      </nav>
    );
  }
}

export default Header;
