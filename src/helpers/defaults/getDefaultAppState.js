// @flow

import type { AppStateType } from "src/context/AppState/Types/AppStateType";

export type GetDefaultAppState = () => AppStateType;

export const getDefaultAppState: GetDefaultAppState = () => ({
  navBarOpen: false
});

export default getDefaultAppState;
