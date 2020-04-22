// @flow

import type { AddressDataType } from "./AddressDataType";
import type { AttributeType } from "./AttributeType";
import type { BsonPointType } from "./BsonPointType";
import type { ClassificationType } from "./ClassificationType";
import type { DateRangeType } from "./DateRangeType";
import type { ImageType } from "./ImageType";
import type { ImageVariantType } from "./ImageVariantType";
import type { LinkedServiceType } from "./LinkedServiceType";
import type { PhoneType } from "./PhoneType";
import type { RegionType } from "./RegionType";
import type { UriType } from "./UriType";

export type EstateType = {
  id: string,
  name: string,
  category: string,
  category_code: string,
  description?: string,
  locality?: string,
  localities?: Array<string>, // Used for search location
  area?: string,
  regions?: Array<RegionType>,
  state: string,
  state_code: string,
  phones: Array<PhoneType>,
  emails: Array<UriType>,
  urls: Array<UriType>,
  social: Array<UriType>,
  subtypes: Array<ClassificationType>,
  attributes: Array<AttributeType>,
  tags: string[],
  accreditations?: Array<AttributeType>,
  abn?: string,
  memberships?: Array<AttributeType>,
  geo_location: BsonPointType,
  status: string,
  update_date: string,
  hero_image?: ImageType,
  images?: Array<ImageType>,
  star_rating?: number,
  latest_date?: string,
  rate_from?: number,
  addresses?: {
    PHYSICAL: {
      street_address: string,
      post_code: string,
      locality: string,
      area: string,
      suburb?: string,
      city?: string,
      state: string,
      state_code: string,
      regions?: Array<RegionType>,
      country: string,
      geocode: {
        lat: number,
        lng: number
      },
      loc: [Number, number]
    },
    POSTAL: {
      street_address: string,
      post_code: string,
      locality: string,
      area: string,
      suburb?: string,
      city?: string,
      state: string,
      state_code: string,
      regions?: Array<RegionType>,
      country: string
    }
  }
};
