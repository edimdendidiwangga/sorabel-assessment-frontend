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
