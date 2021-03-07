import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

function Counter(props) {
  const { onIncrement, onDecrement, value } = props;
  return (
    <div className="counter">
      <button type="button" className="button-decrement" onClick={onDecrement}>
        -
      </button>
      <div className="in-basket">
        {value}
        {' '}
        in Basket
      </div>
      <button type="button" className="button-increment" onClick={onIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
