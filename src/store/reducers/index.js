import { addProduct, deleteProduct, manage, openModal } from './products'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  addProduct,
  deleteProduct,
  manage,
  openModal,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer