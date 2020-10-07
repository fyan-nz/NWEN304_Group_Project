import React from 'react';

/**
 * global styles
 */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ScrollToTop from './components/router/scrollToTop';

import { Provider } from 'react-redux';
import store from './redux/store/store';

import NavBar from './components/navBar/index';
import Home from './pages/home/index';
import Products from './pages/products/index';
import Cart from './pages/cart/index';
import Login from './pages/login/index';
import Signup from './pages/signup/index';
import NotFound from './pages/404/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products/:category' component={Products} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/404' component={NotFound} />
            <Redirect path='*' to='/404' />
          </Switch>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
