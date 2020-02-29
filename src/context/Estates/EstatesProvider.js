// @flow

import React, { useReducer, useContext } from "react";
import superagent from "superagent";
import { EstatesContext } from "./EstatesContext";
import { ConfigurationContext } from "src/context";

const { Provider } = EstatesContext;

export const EstatesProvider = ({ children }) => {
  const { api } = useContext(ConfigurationContext);
  const { baseUrl, apiKey, defaultQuery } = api;

  const fetchEstates = async (endpoint: string, params?: any) => {
    const response = await superagent
      .get(`${baseUrl}/endpoint`)
      .header("API-KEY", apiKey)
      .query({
        ...defaultQuery,
        ...params
      });
    console.log(response);
    return response;
  };
  return (
    <Provider
      value={{
        fetchEstates,
        dispatch: () => {}
      }}
    >
      {children}
    </Provider>
  );
};

export default EstatesProvider;
