// @flow

import superagent from "superagent";
import {
  setRequestEstatesAction,
  setReceivedEstatesAction
} from "src/store/actions";
import { type Dispatch as ReduxDispatch, Store as ReduxStore } from "redux";

export type FetchEstatesAsyncAction = (params: {}) => (
  dispatch: ReduxDispatch,
  getState: ReduxStore
) => any;

export const fetchEstatesAsyncAction: FetchEstatesAsyncAction = params => (
  dispatch,
  getState
) => {
  dispatch(setReceivedEstatesAction(params));
};

export default fetchEstatesAsyncAction;
