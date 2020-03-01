// @flow

import type { EstatesType } from "src/context/Estates/Types/Data/EstatesType";

type SetEstatesListAction = (
  list: string[],
  listData: EstatesType
) => {
  type: "SET_LIST",
  list: string[],
  listData: EstatesType
};

export const setEstatesListAction: SetEstatesListAction = (list, listData) => ({
  type: "SET_LIST",
  list,
  listData
});

export default setEstatesListAction;
