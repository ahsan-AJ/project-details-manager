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

import {Provider} from 'react-redux';


// import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
// import firebase  from './config/firebase_config';
// import { createFirestoreInstance } from 'redux-firestore';

import store from './store';



const appStore = store();



//  Wrap the App component in the Provider component with store as a prop
// const rrfConfig = { userProfile: 'users'};


ReactDOM.render(
    <Provider store={appStore}>
        {/*<ReactReduxFirebaseProvider {...rrfProps}>*/}
        <App />
        {/*</ReactReduxFirebaseProvider>*/}
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
