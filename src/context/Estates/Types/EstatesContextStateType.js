// @flow

import type { EstatesType } from "./Data/EstatesType";

export type EstatesContextStateType = {
  list: string[],
  listData: EstatesType,
  fetch: {
    isFetching: boolean
  }
};
