/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

function Counter(props) {
  return (
    <div>
      <button className="button-increment" onClick={props.onIncrement}>
        +
      </button>
      {props.value}
      {' '}
      in Basket
      <button clssName="button-decrement" onClick={props.onDecrement}>
        -
      </button>
    </div>
  );
}

export default Counter;
