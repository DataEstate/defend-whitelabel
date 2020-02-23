// @flow

import type { DataStoreType } from "src/store/types/DataStoreType";

export type GetDefaultReduxStore = () => DataStoreType;

export const getDefaultReduxStore: GetDefaultReduxStore = () => ({
  appName: "Cool Application",
  estates: {
    isFetching: false,
    listings: [],
    listingData: {}
  }
});

export default getDefaultReduxStore;
