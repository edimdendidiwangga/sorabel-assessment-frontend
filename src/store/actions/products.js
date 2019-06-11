import * as types from '../types'

export const createProduct = (product, callback) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: types.CREATE_PRODUCT_LOADING });
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore.collection('products').add({
      ...product
    }).then(() => {
      callback(true)
      dispatch({ type: types.CREATE_PRODUCT_SUCCESS, payload: product });
    }).catch(err => {
      callback(false)
      dispatch({ type: types.CREATE_PRODUCT_ERROR }, err);
    });
  }
};

export const removeProduct = (id, callback) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: types.DELETE_PRODUCT_LOADING });
    const firestore = getFirestore();
    firestore.collection('products').doc(id).delete().then(() => {
      callback(true)
      dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: id });
    }).catch(err => {
      callback(false)
      dispatch({ type: types.DELETE_PRODUCT_ERROR }, err);
    });
  }
};

export const openOrCloseModal = (isOpen, id) => (dispatch) => {
  dispatch({ type: types.OPEN_OR_CLOSE_MODAL, isOpen, id });
};
