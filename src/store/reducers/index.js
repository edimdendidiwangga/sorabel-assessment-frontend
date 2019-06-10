import productsReducer from './products'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  addProducts: productsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer