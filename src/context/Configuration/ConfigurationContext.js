// @flow

import React, { createContext } from "react";

import type { ConfigurationStateType } from "./Types/ConfigurationStateType";

export const ConfigurationContext = createContext<ConfigurationStateType>({});

export default ConfigurationContext;
