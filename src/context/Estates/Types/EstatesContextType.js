// @flow

import type { EstatesContextStateType } from "./EstatesContextStateType";

export type EstatesContextType = {
  ...EstatesContextStateType,
  fetchEstates: any, // @TODO - type it correctly.
  dispatch: any,
  isFetching: boolean
};
