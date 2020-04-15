// @flow

import * as React from "react";
import type { NavigationItemDataType } from "./NavigationItemDataType";

export type NavigationItemType = ({
  to?: string,
  name: string,
  height?: string,
  submenu?: Array<NavigationItemDataType>,
}) => React.Node;
