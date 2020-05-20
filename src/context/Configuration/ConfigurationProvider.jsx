// @flow

import React from "react";
import ConfigurationContext from "./ConfigurationContext";

import type { ConfigurationStateType } from "./Types/ConfigurationStateType";

const { Provider } = ConfigurationContext;

type Props = {
  config: ConfigurationStateType,
  children: any
};

export const ConfigurationProvider = ({ config, children }: Props) => {
  //Intended to not use dispatch at this point.
  return <Provider value={config}>{children}</Provider>;
};

export default ConfigurationProvider;
