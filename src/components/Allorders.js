import React from 'react';
import './Allorders.scss';

const Allorders = () => {
  const allOrders = [
    {
      orderId: 1,
      noOfItems: 3,
      date: 'Sun 04 Mar 2018',
      amount: 120,
      items: [
        {
          id: 1,
          image: './assets/banana.png',
          name: 'Banana',
          count: 0,
          quantity: 1,
          price: 40,
        },
        {
          id: 2,
          image: './assets/apple.png',
          name: 'Apple',
          count: 0,
          quantity: 1,
          price: 40,
        },
        {
          id: 3,
          image: './assets/grape.png',
          name: 'Grape',
          count: 0,
          quantity: 1,
          price: 40,
        },

      ],
    },
    {
      orderId: 2,
      noOfItems: 2,
      date: 'Sun 03 Mar 2018',
      amount: 80,
      items: [
        {
          id: 1,
          image: './assets/banana.png',
          name: 'Banana',
          count: 0,
          quantity: 1,
          price: 40,
        },
        {
          id: 2,
          image: './assets/apple.png',
          name: 'Apple',
          count: 0,
          quantity: 1,
          price: 40,
        },

      ],
    },

  ];
  return (
    <div className="order-container">
      <h1> Post Orders </h1>
      <div className="main-content">
        {allOrders.map((order) => (
          <>
            <div className="top-table">
              <div className="tab-header">
                {' '}
                <h4> ORDER </h4>
                <h4> ITEMS </h4>
                <h4> DATE  </h4>
                <h4> AMOUNT </h4>
              </div>
              <div className="tab-data">
                <h6>
                  {' '}
                  Order id:
                  {' '}
                  {order.id}
                  {' '}
                </h6>
                <h6>
                  {' '}
                  {order.noOfItems}
                  {' '}
                </h6>
                <h6>
                  {' '}
                  {order.date}
                  {' '}
                </h6>
                <h6>
                  {' '}
                  {order.amount}
                  {' '}
                </h6>
              </div>
            </div>
            <table className="table2">
              <tr className="table2-top-header">
                <th> ITEM DESCRIPTION </th>
                <th> UNIT PRICE</th>
                <th> QUANTITY </th>
                <th> SUBTOTAL </th>
              </tr>
              {order.items.map((eachItem) => (
                <tr>
                  <td>{eachItem.name}</td>
                  <td>{eachItem.price}</td>
                  <td>{eachItem.quantity * eachItem.count}</td>
                  <td>{eachItem.price * eachItem.count}</td>
                </tr>

              ))}
            </table>
          </>
        ))}
      </div>
    </div>

  );
};

export default Allorders;
