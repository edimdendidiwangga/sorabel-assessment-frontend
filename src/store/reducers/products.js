import * as types from '../types'

const initState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
}
const initialize = {
  search: '',
  limit: 5,
  category: 0,
  sort: ['createdAt', 'desc'],
}

export const addProduct = (state = initState, action) => {
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

export const deleteProduct = (state = initState, action) => {
  switch (action.type) {
    case types.DELETE_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload,
      };
    case types.DELETE_PRODUCT_ERROR:
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

export const manage = (state = initialize, action) => {
  switch (action.type) {
    case types.SORT_PRODUCTS:
      return {
        ...state,
        sort: action.payload ,
      };
    case types.FILTER_PRODUCTS:
      return {
        ...state,
        category: action.payload ,
      };
    case types.SEARCH_PRODUCTS:
      return {
        ...state,
        search: action.payload ,
      };
    case types.GET_MORE_PRODUCTS:
      return {
        ...state,
        limit: state.limit + 5,
      };
    default:
      return state;
  }
};

export const openModal = (state = { isOpen: false, id: '' }, action) => {
  switch (action.type) {
    case types.OPEN_OR_CLOSE_MODAL:
      return {
        ...state,
        isOpen: action.isOpen,
        id: action.id,
      }
    default:
      return state;
  }
};
