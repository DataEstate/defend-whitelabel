// @flow

import React, { createContext } from "react";
import { useContext } from "react";
import type { AppStateContextType } from "./Types/AppStateContextType";

export const AppStateContext = createContext<AppStateContextType>({
  navBarOpen: false,
  dispatch: action => {}
});

export default AppStateContext;
