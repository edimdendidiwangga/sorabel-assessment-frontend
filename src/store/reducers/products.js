import * as types from '../types'

const initState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case types.CREATE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default productReducer;