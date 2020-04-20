// @flow

export type NavigationItemDataType = {
  to?: string,
  name: string,
  height?: string,
  submenu?: Array<NavigationItemDataType>,
};
