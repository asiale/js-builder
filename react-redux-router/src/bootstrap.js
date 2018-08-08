import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import Signup from 'bootstrap/dist/css/bootstrap.css';
import Signin from './style/main.scss';
import Layout from './components/layout';

import HeaderWrapper from './components/headerWrapper';
import Signup from './components/signup';
import Signin from '/.components/signin';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
    <switch>
<HeaderWrapper>
<Route path='/' exact component={Signin}/>
<Route path='/signup' component={Signup}/>
<Route path='/signin' exact component={Signin}/>
</HeaderWrapper>
    </switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
