// @flow

import type { EstatesContextStateType } from "./EstatesContextStateType";

export type EstatesContextType = {
  ...EstatesContextStateType,
  fetch: any,
  fetchEstates: any, // @TODO - type it correctly.
  dispatch: any
};
