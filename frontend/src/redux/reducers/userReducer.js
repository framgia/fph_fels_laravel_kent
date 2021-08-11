import { ActionTypes } from "../constants/action-constants";

const initialState = {
  resource: []
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_ALL:
      return {...state, resource: payload};
    default:
      return state;
  };
};
