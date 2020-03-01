// @flow

import type { EstatesContextStateType } from "./Types/EstatesContextStateType";

export const EstatesState = (state: EstatesContextStateType, action: any) => {
  switch (action.type) {
    case "SET_LIST":
      return {
        ...state,
        list: [...action.list],
        listData: {
          ...action.listData
        }
      };
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching
      };
    default:
      // Or should we throw an error
      return state;
  }
};

export default EstatesState;
