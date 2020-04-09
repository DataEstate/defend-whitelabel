// @flow

type SetQueryParamsEstatesAction = (
  params: {}
) => {
  type: "SET_QUERY_PARAMS",
  params: {}
};

export const setQueryParamsEstatesAction: SetQueryParamsEstatesAction = (
  params: {}
) => ({
  type: "SET_QUERY_PARAMS",
  params
});

export default setQueryParamsEstatesAction;
