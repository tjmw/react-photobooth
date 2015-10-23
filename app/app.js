import React from 'react';
import ReactDOM from 'react-dom';
import Photobooth from './components/photobooth';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import '../css/main.scss'

import reactPhotoboothApp from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(reactPhotoboothApp);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Photobooth/>
  </Provider>,
  rootElement
);
