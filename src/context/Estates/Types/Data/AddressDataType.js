// @flow

export type AddressDataType = {
  street_address: string,
  post_code: string,
  locality: string,
  state: string,
  state_code: string,
  area?: string,
  country?: string,
  country_code?: string,
  geocode?: {
    lat: number,
    lng: number
  },
  loc?: [number, number]
};
