// @flow

import type { ConfigurationStateType } from "src/context/Configuration/Types/ConfigurationtStateType";

export const config: ConfigurationStateType = {
  api: {
    baseUrl: "http://api.dataestate.estates/v2",
    apiKey: "55ca805b86cb912c49a76292"
  },
  site: {
    title: "Data Estate",
    tagline: "Manage your data today"
  }
};

export default config;
