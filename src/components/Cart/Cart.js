import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';
import PropTypes from 'prop-types';
import Table from '../Table/Table';

const Cart = (props) => {
  const { cartItems } = props;
  const { cartCount } = props;

  const cartTotal = Object.values(cartItems).reduce((acc, val) => {
    const categoryTotal = val.reduce((ac, cur) => ac + cur.price * cur.count, 0);
    return acc + categoryTotal;
  }, 0);

  return (

    <div data-testid="cart" className="cart-container">
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
Cart.defaultProps = {
  cartItems: {},
};
Cart.propTypes = {
  cartItems: PropTypes.shape({
    category: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }),

  cartCount: PropTypes.number.isRequired,
};
