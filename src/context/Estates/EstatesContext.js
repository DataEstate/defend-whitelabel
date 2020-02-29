// @flow

import React, { createContext } from "react";
import type { EstatesContextType } from "./Types/EstatesContextType";

export const EstatesContext = createContext<EstatesContextType>({
  list: [],
  listData: {},
  fetch: { isFetching: false },
  dispatch: action => {}
});

export default EstatesContext;
