import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

import { BrowserRouter as Router, Route,  Link } from 'react-router-dom'

import reducer from './reducers';
import App from './App';

let store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
     <Router>
      <Route path="/" component={App} >

      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
