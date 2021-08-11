import { ActionTypes } from "../constants/action-constants";

export const getResource = (resource) => {
  return {
    type: ActionTypes.GET_ALL,
    payload: resource
  }
};
