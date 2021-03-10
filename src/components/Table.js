import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';

const Table = (props) => {
  const { cartItems, className } = props;
  return (
    <div className="tab">
      <table className={className}>
        <thead>
          <tr className={className}>
            <th> ITEM DESCRIPTION </th>
            <th> UNIT PRICE</th>
            <th> QUANTITY </th>
            <th> SUBTOTAL </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((eachItem) => (
            <tr key={eachItem.id}>
              <td>{eachItem.name}</td>
              <td>{eachItem.price}</td>
              <td>{eachItem.quantity * eachItem.count}</td>
              <td>{eachItem.price * eachItem.count}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  className: PropTypes.string.isRequired,
};
