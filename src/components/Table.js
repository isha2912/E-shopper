import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
  const { cartItems, className } = props;
  return (
    <div className="tab">
      <table className={className}>
        <tr className>
          <th> ITEM DESCRIPTION </th>
          <th> UNIT PRICE</th>
          <th> QUANTITY </th>
          <th> SUBTOTAL </th>
        </tr>
        <tr>
          <td> Fruits and Vegetables </td>
          <td>  </td>
          <td>  </td>
          <td>  </td>
        </tr>
        {cartItems.map((eachItem) => (
          <tr>
            <td>{eachItem.name}</td>
            <td>{eachItem.price}</td>
            <td>{eachItem.quantity * eachItem.count}</td>
            <td>{eachItem.price * eachItem.count}</td>
          </tr>
        )) }
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
  })).isRequired,
  className: PropTypes.string.isRequired,
};
