// @flow

import type { AddressDataType } from "./Data/AddressDataType";
import type { AttributeType } from "./Data/AttributeType";
import type { BsonPointType } from "./Data/BsonPointType";
import type { ClassificationType } from "./Data/ClassificationType";
import type { DateRangeType } from "./Data/DateRangeType";
import type { EstateType } from "./Data/EstateType";
import type { ImageType } from "./Data/ImageType";
import type { ImageVariantType } from "./Data/ImageVariantType";
import type { LinkedServiceType } from "./Data/LinkedServiceType";
import type { PhoneType } from "./Data/PhoneType";
import type { RegionType } from "./Data/RegionType";
import type { UriType } from "./Data/UriType";

export type EstatesContextStateType = {
  list: string[],
  listData: {
    [string]: EstateType
  },
  fetch: {
    isFetching: boolean
  }
};
