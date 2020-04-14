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
        fetch: {
          ...state.fetch,
          isFetching: action.isFetching
        }
      };
    case "SET_QUERY_PARAMS":
      return {
        ...state,
        fetch: {
          ...state.fetch,
          params: action.params
        }
      };
    default:
      // Or should we throw an error
      return state;
  }
};

export default EstatesState;
