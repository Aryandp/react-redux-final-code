import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App1 from './containers/ContainerHeader';
import {data} from './data/header_data';
import rootreducer from './reducers';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let store = createStore(rootreducer,data)

ReactDOM.render(

  <Provider store = {store}>
  

        <App1 />
       

  </Provider>

  , document.getElementById('root'));

serviceWorker.register();
