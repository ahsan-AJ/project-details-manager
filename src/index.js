// TODO: Change implementation from thunk to redux-saga

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Steps for Creating Redux App;
//  import {createStore} from Redux;
// Import provider component so that application has access to the store
//  import {provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
// Create a store variable and call createStore();
//  Combine different reducers into a single reducer and pass it to the create store function

//  For asynchronous tasks like fetching data, we use middleware like redux thunk or redux saga
//  install redux-thunk or redux-saga and add it as a middleware

import thunk from 'redux-thunk';

// use applyMiddleWare function in createStore to pass list of middlewares to the app

const store = createStore(rootReducer, applyMiddleware(thunk));

//  Wrap the App component in the Provider component with store as a prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
