// @flow

export type NavigationItemDataType = {
  to?: string,
  name: string,
  height?: string,
  submenu?: Array<NavigationItemDataType>,
  onClick?: (e: any) => {},
  className?: string,
};
