import * as ActionTypes from './ActionTypes';

export const addProduct = product => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    product
  };
};

export const editProduct = product => {
  return {
    type: ActionTypes.EDIT_PRODUCT,
    product
  };
};

export const removeProduct = id => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    id
  };
};

export const selectProduct = id => {
  return {
    type: ActionTypes.VIEW_PRODUCT,
    id
  };
};


