// @flow

export type ConfigurationStateType = {
  api: {
    baseUrl: string,
    apiKey: string,
    defaultQuery: { [string]: number | string }
  },
  site: {
    title: string,
    tagline?: string
  }
};
