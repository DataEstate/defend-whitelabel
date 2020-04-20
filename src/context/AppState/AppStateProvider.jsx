// @flow

import React, { useReducer } from "react";
import { AppStateContext } from "src/context/AppState";
import { AppStateReducer } from "src/context/AppState";
import type { AppStateType } from "./Types/AppStateType";

const { Provider } = AppStateContext;

type Props = {
  store: AppStateType,
  children: any,
};

export const AppStateProvider = ({ store, children }: Props) => {
  const [state, dispatch] = useReducer(AppStateReducer, store);
  return (
    <Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

export default AppStateProvider;
