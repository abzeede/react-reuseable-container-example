import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//import component
import App from './containers/App';

//import style
import './index.css';

//import root reducer
import reducer from './reducer';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
  )
);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
  document.getElementById('root')
);
