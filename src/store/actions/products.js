import * as types from '../types'

export const createProduct = (product, callback) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: types.CREATE_PRODUCT_LOADING });
    const firestore = getFirestore();
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

export const sortProducts = (type) => (dispatch) => {
  if (type === 'newest') {
    dispatch({ type: types.SORT_NEWEST_PRODUCTS });
  }
  if (type === 'expensive') {
    dispatch({ type: types.SORT_MOST_EXPENSIVE_PRODUCTS });
  }
  if (type === 'cheapest') {
    dispatch({ type: types.SORT_CHEAPEST_PRODUCTS });
  }
};
