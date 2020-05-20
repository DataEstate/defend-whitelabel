// @flow

import type { ConfigurationStateType } from "src/context/Configuration/Types/ConfigurationStateType";

export const config: ConfigurationStateType = {
  api: {
    baseUrl: `${process.env.API_URL || ""}`,
    apiKey: `${process.env.API_KEY || ""}`,
    defaultQuery: {
      size: 12,
      fields:
        "id,name,category,category_code,description,locality,state_code,star_rating,latest_date,rate_from,hero_image",
      categories: "ACCOMM,ATTRACTION,TOUR,EVENT,RESTAURANT",
      star_rated: "true",
    }
  },
  site: {
    title: "Data Estate",
    tagline: "Manage your data today"
  }
};

export default config;
