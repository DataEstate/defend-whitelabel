type GetQueryParams = (
  urlParams: string
) => {};

export const getQueryParams: GetQueryParams = urlParams => {
  return JSON.parse('{"' + decodeURI(urlParams).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
};

export default getQueryParams;
