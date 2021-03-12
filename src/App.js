/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext';
import './App.css';
import { getData, postData } from './utils/axios.util';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Allorders from './components/Allorders';

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState({});
  const groupByCategory = (items) => items.reduce((acc, product) => {
    const newProduct = {
      ...product,
      quantity: 0,
      stock: product.count,
      count: 0,

    };
    // console.log(newProduct);
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(newProduct);
    return acc;
  }, {});

  const onIncrement = (id, category) => {
    const newProduct = filteredProducts[category].map((eachProduct) => (
      eachProduct.id === id ? {
        ...eachProduct,
        count: eachProduct.stock > 0 ? eachProduct.count + 1 : eachProduct.count,
        stock: eachProduct.stock > 0 ? eachProduct.stock - 1 : eachProduct.stock,
      } : eachProduct
    ));
    filteredProducts[category] = newProduct;
    setFilteredProducts(filteredProducts);
    const newCount = (filteredProducts[category].find(
      (product) => {
        if (product.id === id) return (product.stock > 0 && product.count > 0); return false;
      },
    )) ? cartCount + 1 : cartCount;
    setCartCount(newCount);
    const newCartItem = filteredProducts[category].filter((product) => product.count > 0);
    cartItems[category] = newCartItem;
    setCartItems(cartItems);
  };

  const onDecrement = (id, category) => {
    const newProduct = filteredProducts[category].map((product) => (product.id === id ? {
      ...product,
      count: product.count > 0 ? product.count - 1 : product.count,
      stock: product.count > 0 ? product.stock + 1 : product.stock,
    } : product));

    const newCount = (filteredProducts[category].find(
      (product) => { if (product.id === id) return product.count > 0; return false; },
    )) ? cartCount - 1 : cartCount;
    setCartCount(newCount);
    filteredProducts[category] = newProduct;
    setFilteredProducts(filteredProducts);
    const newCartItem = filteredProducts[category].filter((product) => product.count > 0);
    cartItems[category] = newCartItem;
    setCartItems(cartItems);
  };
  useEffect(async () => {
    const order = await getData('/orders');
    const allOrders = order.data;
    setOrders(allOrders);
  }, [], [orders], [cartItems]);

  useEffect(async () => {
    const items = await getData('/items');
    const itemsObjects = items.data;
    setProducts(itemsObjects);
    const filterProducts = groupByCategory(itemsObjects);
    setIsLoaded(true);
    setFilteredProducts(filterProducts);
  }, []);

  const onCheckout = async () => {
    const finalOrder = [];
    let finOrder = {};
    Object.values(cartItems).forEach((eachCategory) => {
      eachCategory.forEach((eachProduct) => {
        const item = {
          id: eachProduct.id,
          name: eachProduct.name,
          price: eachProduct.price,
          count: eachProduct.count,
          category: eachProduct.category,
        };
        finalOrder.push(item);
      });
      finOrder = { items: finalOrder };
    });

    const response = await postData('/orders', finOrder);
    if (response.data) {
      const newAllOrders = [...orders,
        response.data.data];

      setOrders(newAllOrders);
      setCartItems({});
      setCartCount(0);
      return true;
    }
    return false;
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
                filteredProducts={filteredProducts}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
              />
            </div>
          </Route>

          <Route path="/cart" exact>
            <Cart cartItems={cartItems} cartCount={cartCount} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout onSubmitForm={onCheckout} />
          </Route>
          <Route path="/allorders">
            <Allorders allOrders={orders} />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>

  );
};

export default App;
