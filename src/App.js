/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import axiosUtil from './utils/api';
import { ThemeContext } from './components/ThemeContext';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Allorders from './components/Allorders/Allorders';

const App = () => {
  const [cartItems, setCartItems] = useState({});
  const [orders, setOrders] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [theme, setTheme] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState({});

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
    const receivedOrders = await axiosUtil.getOrders();

    setOrders(receivedOrders);
  }, []);

  useEffect(async () => {
    const items = await axiosUtil.getItems();
    const itemsObjects = items;
    console.log(items);
    const filterProducts = axiosUtil.groupByCategory(itemsObjects);
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

    const response = await axios.post('./orders', finOrder);
    if (response.data) {
      const newAllOrders = [...orders, response.data.data];
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
