/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../Cart/Cart.scss';

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
          {Object.keys(cartItems).map((eachCategory) => (
            <React.Fragment key={eachCategory}>
              <tr>
                <td>{eachCategory}</td>
              </tr>

              {cartItems[eachCategory].map((eachItem) => (
                <tr key={eachItem.id}>
                  <td>{eachItem.name}</td>
                  <td>{eachItem.price}</td>
                  <td>{eachItem.quantity * eachItem.count}</td>
                  <td>{eachItem.price * eachItem.count}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Table;

Table.propTypes = {
  cartItems: PropTypes.shape({
    category: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  className: PropTypes.string.isRequired,
};
