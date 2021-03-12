/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Allorders.scss';

const Allorders = (props) => {
  const { allOrders } = props;
  return (
    <div className="order-container">
      <h1> Post Orders </h1>
      <div className="main-content">
        <table>
          <tr>
            <td>Order id</td>
            <td>Date</td>
            <td>Items</td>
          </tr>
          {allOrders.map((eachOrder) => (
            <tr key={eachOrder.id}>
              <td>{eachOrder.id}</td>
              <td>{new Date(eachOrder.date).toString()}</td>
              <td>
                {(eachOrder.items).map((eachItem) => (
                  <table key={eachItem.id}>
                    <tr>
                      <td>{eachItem.id}</td>
                      <td>{eachItem.name}</td>
                      <td>{eachItem.count}</td>
                    </tr>
                  </table>
                ))}
              </td>
            </tr>
          ))}
        </table>
      </div>

    </div>

  );
};
export default Allorders;

Allorders.propTypes = {

};
