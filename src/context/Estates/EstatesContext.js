// @flow

import React, { createContext } from "react";
import type { EstatesContextType } from "./Types/EstatesContextType";

export const EstatesContext = createContext<EstatesContextType>({
  list: [],
  listData: {},
  fetch: { 
    isFetching: false,
    params: {}
  },
  fetchEstates: null,
  dispatch: null
});

export default EstatesContext;
