// @flow

import type { ConfigurationStateType } from "src/context/Configuration/Types/ConfigurationtStateType";

export const config: ConfigurationStateType = {
  api: {
    baseUrl: `${process.env.API_URL || ""}`,
    apiKey: `${process.env.API_KEY || ""}`,
    defaultQuery: {
      pg: 1,
    },
  },
  site: {
    title: "Data Estate",
    tagline: "Manage your data today",
  },
};

export default config;
