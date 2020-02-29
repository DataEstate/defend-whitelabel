// @flow

export type ConfigurationStateType = {
  api: {
    baseUrl: string,
    apiKey: string,
    defaultQuery: {
      size: number,
      pg: number
    }
  },
  site: {
    title: string,
    tagline?: string
  }
};
