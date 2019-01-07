import {combineReducers} from 'redux';

import authReducer from './authReducer';
import projectReducer from './projectReducer';

// TODO: Import firestore reducer to sync firestore data with the state in background
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    project : projectReducer,
    firestore: firestoreReducer
});

export default rootReducer;

