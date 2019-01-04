import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Steps for Creating Redux App;
// 1 import {createStore} from Redux;
// Import provider component so that application has access to the store
// 2 import {provider} from 'react-redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
// 2 Create a store variable and call createStore();
// 3 Combine different reducers into a single reducer and pass it to the create store function

const store = createStore(rootReducer);

// 4 Wrap the App component in the Provider component with store as a prop
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
