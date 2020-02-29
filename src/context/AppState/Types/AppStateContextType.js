// @flow

import type { AppStateType } from "./AppStateType";

export type AppStateContextType = AppStateType & {
  dispatch: any
};
