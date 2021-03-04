/* eslint-disable react/destructuring-assignment */

import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          image: './assets/banana.png',
          name: 'Banana',
          count: 0,
          price: 40,
        },
        {
          id: 2,
          image: './assets/apple.png',
          name: 'Apple',
          count: 0,
          price: 40,
        },
        {
          id: 3,
          image: './assets/grape.png',
          name: 'Grape',
          count: 0,
          price: 40,
        },
        {
          id: 4,
          image: './assets/cherry.png',
          name: 'Cherry',
          count: 0,
          price: 60,
        },
        {
          id: 5,
          image: './assets/orange.png',
          name: 'Orange',
          count: 0,
          price: 30,
        },
        {
          id: 6,
          image: './assets/peach.png',
          name: 'Peach',
          count: 0,
          price: 40,
        },
        {
          id: 7,
          image: './assets/pineapple.png',
          name: 'Pineapple',
          count: 0,
          price: 60,
        },
        {
          id: 8,
          image: './assets/strawberry.png',
          name: 'Strawberry',
          count: 0,
          price: 30,
        },
        {
          id: 9,
          image: './assets/mango.png',
          name: 'Mango',
          count: 0,
          price: 40,
        },
      ],
      cartCount: 0,
    };
  }

  onIncrement(id) {
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount + 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, count: eachProduct.count + 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  onDecrement(id) {
    let isEmpty = 0;
    if (this.state.cartCount === 0) {
      return;
    }
    this.state.products.forEach((eachProduct) => {
      if (eachProduct.id === id && eachProduct.count === 0) {
        isEmpty = 1;
      }
    });

    if (isEmpty) {
      return;
    }
    const newState = {
      ...this.state,
      cartCount: this.state.cartCount - 1,
      products: this.state.products.map((eachProduct) => {
        if (eachProduct.id === id) {
          return { ...eachProduct, count: eachProduct.count - 1 };
        }
        return eachProduct;
      }),
    };
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.cartCount} />
        <div className="all-products">
          {this.state.products.map((eachProduct) => (
            <Product
              key={eachProduct.id}
              product={eachProduct}
              onIncrement={() => this.onIncrement(eachProduct.id)}
              onDecrement={() => this.onDecrement(eachProduct.id)}
            />
          ))}
          ;
        </div>
      </div>
    );
  }
}
export default App;
