// @flow

import * as React from "react";
import type { NavigationItemDataType } from "./NavigationItemDataType";

export type NavigationItemClassesType = {
  root?: string,
  navItem?: string,
  navItemLink?: {},
  navItemArrow?: {},
  submenuItems?: {},
};
export type NavigationItemProps = {
  ...NavigationItemDataType,
  classes?: NavigationItemClassesType,
  onClick: (
    e: any,
    to?: string,
    parent?: null | NavigationItemDataType
  ) => void,
};

export type NavigationItemType = (props: NavigationItemProps) => React.Node;
