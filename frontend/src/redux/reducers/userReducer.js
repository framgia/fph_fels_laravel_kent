import { ActionTypes } from "../constants/action-constants";

const initialState = {
  resource: [],
  followings: [],
};

export const userReducer = (state = initialState.resource, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_ALL:
      return {...state, resource: payload};
    default:
      return state;
  }
};

export const userFollowings = (state = initialState.followings, {type, payload}) => {
  switch (type) {
    case ActionTypes.GET_FOLLOWINGS:
      return { ...state, followings: payload };
    default:
      return state;
  }
};
