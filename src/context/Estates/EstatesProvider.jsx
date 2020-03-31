// @flow

import React, { useReducer, useContext } from "react";
import superagent from "superagent";
import { EstatesContext } from "./EstatesContext";
import { EstatesState } from "./EstatesState";
import { setEstatesListAction, setIsFetchingEstatesAction } from "./Actions";
import { ConfigurationContext } from "src/context";

import type { EstateType } from "./Types/Data/EstateType";
import type { EstatesType } from "./Types/Data/EstatesType";

type GetIdList = (responseList: Array<EstateType>) => string[];
type GetListData = (responseList: Array<EstateType>) => EstatesType;

type Props = {
  children: any
};

const { Provider } = EstatesContext;

const getIdList: GetIdList = responseList =>
  responseList ? responseList.map(listItem => listItem.id) : [];

const getListData: GetListData = responseList => {
  const listData = responseList
    ? responseList.reduce((prev, listItem) => {
        return {
          ...prev,
          [listItem.id]: listItem
        };
      }, {})
    : {};
  return listData;
};

export const EstatesProvider = ({ children }: Props) => {
  const { api } = useContext(ConfigurationContext);
  const { baseUrl, apiKey, defaultQuery } = api;
  const [state, dispatch] = useReducer(EstatesState, {
    list: [],
    listData: {},
    fetch: {
      isFetching: false
    }
  });

  const fetchEstates = (params?: any) => {
    dispatch(setIsFetchingEstatesAction(true));
    superagent
      .get(`${baseUrl}/estates/data`)
      .set("API-KEY", apiKey)
      .query({
        ...defaultQuery,
        ...params
      })
      .then(response => {
        dispatch(
          setEstatesListAction(
            getIdList(response.body),
            getListData(response.body)
          )
        );
        dispatch(setIsFetchingEstatesAction(false));
      });
  };
  return (
    <Provider
      value={{
        ...state,
        fetchEstates: fetchEstates,
        dispatch: () => {},
      }}
    >
      {children}
    </Provider>
  );
};

export default EstatesProvider;
