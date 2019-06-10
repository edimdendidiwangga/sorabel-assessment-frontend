export const createProduct = (product) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState().firebase.auth.uid;
    firestore.collection('products').add({
      ...product
    }).then(() => {
      dispatch({ type: 'CREATE_PRODUCT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PRODUCT_ERROR' }, err);
    });
  }
};
