/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext';
import './App.css';

// import PropTypes from 'prop-types';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Allorder from './components/Allorders';

const App = () => {
  const [cartItems, setCartItems] = useState(0);
  const [products, setProducts] = useState([
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
  ]);

  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState(0);

  const onIncrement = (id) => {
    setCartCount(cartCount + 1);
    const newProducts = products.map((eachProduct) => {
      if (eachProduct.id === id) {
        return { ...eachProduct, count: eachProduct.count + 1 };
      }
      return eachProduct;
    });

    setProducts(newProducts);

    setCartItems(newProducts);

    const newCartItems = newProducts.filter((product) => product.count > 0);
    setCartItems(newCartItems);
  };

  const onDecrement = (id) => {
    let isEmpty = 0;
    if (cartCount === 0) {
      return;
    }
    products.forEach((eachProduct) => {
      if (eachProduct.id === id && eachProduct.count === 0) {
        isEmpty = 1;
      }
    });

    if (isEmpty) {
      return;
    }
    setCartCount(cartCount - 1);
    const newProducts = products.map((eachProduct) => {
      if (eachProduct.id === id) {
        return { ...eachProduct, count: eachProduct.count - 1 };
      }
      return eachProduct;
    });

    setProducts(newProducts);

    setCartItems(newProducts);

    const newCartItems = newProducts.filter((product) => product.count > 0);
    setCartItems(newCartItems);
  };

  return (

    <div className="App">

      <BrowserRouter>
        <ThemeContext.Provider value={theme}>
          {' '}
          <Header cartCount={cartCount} />
        </ThemeContext.Provider>
        <button type="button" onClick={() => setTheme(!theme)}> Theme change </button>
        <Switch>

          <Route path="/" exact>
            <div className="all-products">
              <Home
                products={products}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
              />
            </div>
          </Route>

          <Route path="/cart" exact>
            <Cart cartItems={cartItems} cartCount={cartCount} />
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
};

export default App;
