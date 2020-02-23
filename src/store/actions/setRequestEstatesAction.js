// @flow

type SetRequestEstatesAction = (
  params: {},
  method: string
) => {
  type: "SET_REQUEST_ESTATES",
  isFetching: boolean,
  params: {}
};

export const setRequestEstatesAction: SetRequestEstatesAction = (
  params,
  method
) => ({
  type: "SET_REQUEST_ESTATES",
  isFetching: true,
  method,
  params
});

export default setRequestEstatesAction;
