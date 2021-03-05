/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

function Counter(props) {
  return (
    <div>
      <button clssName="button-decrement" onClick={props.onDecrement}>
        -
      </button>

      {props.value}
      {' '}
      in Basket
      <button className="button-increment" onClick={props.onIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
