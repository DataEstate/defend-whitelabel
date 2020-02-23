// @flow

export type ConfigurationStateType = {
  api: {
    baseUrl: string,
    apiKey: string
  },
  site: {
    title: string,
    tagline?: string
  }
};
