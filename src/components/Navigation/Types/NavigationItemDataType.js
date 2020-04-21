// @flow

export type NavigationItemDataType = {
  to?: string,
  name: string,
  submenu?: Array<NavigationItemDataType>,
};
