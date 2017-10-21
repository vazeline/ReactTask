import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import ProductsReducer from './redux/Reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  ProductsReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
<Provider store={store}> 
  <App />
</Provider>,
 document.getElementById('root')
);
registerServiceWorker();
