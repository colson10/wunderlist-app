import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/app/App';
import reducer from './reducers/index';
import thunk from './lib/redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));

const app = document.createElement('div');
document.body.appendChild(app);
render(<Provider store={ store }><App/></Provider>, app);
registerServiceWorker();
