// @flow

export type DataStoreType = {
  appName: string,
  estates: {
    isFetching: boolean,
    listings: Array<string>,
    listingData: {},
    request?: {
      endpoint: string,
      method: "get" | "post" | "put" | "delete",
      params: {},
      body?: {},
      status: string,
      statusCode: number
    }
  }
};
