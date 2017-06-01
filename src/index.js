import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

import reducer from './reducers';
import App from './App';
import Slider from './components/Slider';

let store = createStore(reducer,  applyMiddleware(ReduxThunk));

ReactDOM.render(
   <Provider store={store}>
     <Router>
     <div>
        <Route  exact  path="/" component={App} />
        <Route  path="/load/:hash" component={App} />
        <Route  path="/slider" component={Slider}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
