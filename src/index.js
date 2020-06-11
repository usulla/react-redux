import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import { forbiddenWordsMiddleware } from './redux/middleware';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
render(
  app,
  document.getElementById('root')
);

serviceWorker.unregister();
