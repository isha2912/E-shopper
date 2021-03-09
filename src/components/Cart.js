import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import PropTypes from 'prop-types';
import Table from './Table';

const Cart = (props) => {
  const { cartItems } = props;
  const { cartCount } = props;
  const cartTotal = cartItems.reduce((acc, val) => acc + val.price * val.count, 0);

  return (

    <div className="cart-container">
      <h1 className="basket-header">
        Your Basket
        {' '}
        {cartCount}
        {' '}
      </h1>
      <hr />
      <Table cartItems={cartItems} className="table1"> </Table>
      <div className="link-buttons">

        <Link to="/">
          {' '}
          <button type="button" className="continue-button"> CONTINUE SHOPPING </button>
        </Link>

        <div className="checkout">
          <div className="total">
            <h3> TOTAL</h3>
            <h3>
              {' '}
              {cartTotal}
            </h3>
          </div>

          <Link to="/checkout">
            {' '}
            <button type="button" className="checkout-button"> CHECKOUT </button>
            {' '}
          </Link>

        </div>
      </div>
    </div>

  );
};
export default Cart;

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
  cartCount: PropTypes.number.isRequired,
};
