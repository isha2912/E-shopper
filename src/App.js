/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Allorder from './components/Allorders';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      products: [
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
        {
          id: 4,
          image: './assets/cherry.png',
          name: 'Cherry',
          count: 0,
          quantity: 1,
          price: 60,
        },
        {
          id: 5,
          image: './assets/orange.png',
          name: 'Orange',
          count: 0,
          quantity: 1,
          price: 30,
        },
        {
          id: 6,
          image: './assets/peach.png',
          name: 'Peach',
          count: 0,
          quantity: 1,
          price: 40,
        },
        {
          id: 7,
          image: './assets/pineapple.png',
          name: 'Pineapple',
          count: 0,
          quantity: 1,
          price: 60,
        },
        {
          id: 8,
          image: './assets/strawberry.png',
          name: 'Strawberry',
          count: 0,
          quantity: 1,
          price: 30,
        },
        {
          id: 9,
          image: './assets/mango.png',
          name: 'Mango',
          count: 0,
          quantity: 1,
          price: 40,
        },
      ],
      cartCount: 0,
    };
  }

  onIncrement = (id) => {
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        cartCount: prevState.cartCount + 1,
        products: prevState.products.map((eachProduct) => {
          if (eachProduct.id === id) {
            return { ...eachProduct, count: eachProduct.count + 1 };
          }
          return eachProduct;
        }),
      };
      newState = {
        ...newState,
        cartItems: newState.products.filter((product) => product.count > 0),

      };
      return newState;
    });
  }

  onDecrement = (id) => {
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
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        cartCount: prevState.cartCount - 1,
        products: prevState.products.map((eachProduct) => {
          if (eachProduct.id === id) {
            return { ...eachProduct, count: eachProduct.count - 1 };
          }
          return eachProduct;
        }),
      };
      return newState;
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header cartCount={this.state.cartCount} />
          <Switch>

            <Route path="/" exact>
              <div className="all-products">
                <Home
                  products={this.state.products}
                  onDecrement={this.onDecrement}
                  onIncrement={this.onIncrement}
                />
              </div>
            </Route>

            <Route path="/cart" exact>
              <Cart cartItems={this.state.cartItems} cartCount={this.state.cartCount} />
            </Route>
            <Route path="/checkout" exact>
              <Checkout />
            </Route>
            <Route path="/allorders">
              <Allorder />
            </Route>

          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
