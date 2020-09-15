import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store/store';

import Header from './components/header/index';
import Home from './pages/home/index';
import Products from './pages/products/index';
import Cart from './pages/cart/index';
import NotFound from './pages/404/index';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products/:category' component={Products} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/404' component={NotFound} />
          <Redirect path='*' to='/404' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
