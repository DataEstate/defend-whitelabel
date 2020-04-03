// @flow

import type { EstateType } from "src/context/Estates/Types/Data/EstateType";
import type { EstatesType } from "src/context/Estates/Types/Data/EstatesType";

type GetEstatesArrayFromEstatesData = (
  estates: EstatesType
) => Array<EstateType>;

export const getEstatesArrayFromEstatesData: GetEstatesArrayFromEstatesData = estates => {
  return Object.keys(estates).map(key => estates[key]);
};

export default getEstatesArrayFromEstatesData;
