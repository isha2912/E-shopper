/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Allorders.scss';
import Table from '../Table/Table';
import filterUtil from '../../utils/api';

const Allorders = (props) => {
  const { allOrders } = props;
  const totalAmount = allOrders.map((eachOrder) => {
    const amount = eachOrder.items.reduce((acc, cur) => (acc + cur.price), 0);
    return amount;
  });
  return (
    <div className="all-orders">
      Post Orders
      <table className="top-table">
        <tbody>
          <tr>
            <th>Order id</th>
            <th> Date</th>
            <th>amount</th>
            <th> Items</th>
          </tr>
          {allOrders.map((eachOrder, index) => (
            <React.Fragment key={eachOrder.id}>
              <tr>
                <td>{eachOrder.id}</td>
                <td>{eachOrder.date.toString()}</td>
                <td>{totalAmount[index]}</td>
                <td>{eachOrder.items.length}</td>
              </tr>
              <tr>
                <Table cartItems={filterUtil.groupByCategory(eachOrder.items)} className="table1" />
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Allorders;

Allorders.propTypes = {

};
