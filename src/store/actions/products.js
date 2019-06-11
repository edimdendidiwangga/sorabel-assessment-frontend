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
  let payload =  ['createdAt', 'desc'];
  if (type === 'newest') {
    payload = ['createdAt', 'desc'];
  }
  if (type === 'expensive') {
    payload = ['price', 'desc'];
  }
  if (type === 'cheapest') {
    payload = ['price', 'asc'];
  }
  dispatch({ type: types.SORT_PRODUCTS, payload });
};

export const filterProducts = (category) => (dispatch) => {
  dispatch({ type: types.FILTER_PRODUCTS, payload: category });
};

export const searchProducts = (search) => (dispatch) => {
  dispatch({ type: types.SEARCH_PRODUCTS, payload: search });
};

export const getMoreProducts = () => (dispatch) => {
  dispatch({ type: types.GET_MORE_PRODUCTS });
};

export const hasMoreProducts = (hasMore, limit) => (dispatch) => {
  dispatch({ type: types.HAS_LOAD_MORE, payload: { hasMore, limit } });
};
