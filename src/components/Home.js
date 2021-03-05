/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Product from './Product';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="all-products">
          {this.props.products.map((eachProduct) => (
            <Product
              key={eachProduct.id}
              product={eachProduct}
              onIncrement={() => this.props.onIncrement(eachProduct.id)}
              onDecrement={() => this.props.onDecrement(eachProduct.id)}
            />
          ))}
        </div>
      </div>

    );
  }
}

export default Home;
