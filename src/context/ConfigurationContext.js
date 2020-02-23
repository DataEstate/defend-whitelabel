// @flow

import React, { createContext } from "react";

import { type ConfigurationStateType } from "./Types/ConfigurationtStateType";

export const ConfigurationContext = createContext<ConfigurationStateType>({});

export default ConfigurationContext;
