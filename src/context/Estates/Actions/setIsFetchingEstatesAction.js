// @flow

type SetIsFetchingEstatesAction = (
  isFetching: boolean
) => {
  type: "SET_IS_FETCHING",
  isFetching: boolean
};

export const setIsFetchingEstatesAction: SetIsFetchingEstatesAction = (
  isFetching: boolean
) => ({
  type: "SET_IS_FETCHING",
  isFetching
});

export default setIsFetchingEstatesAction;
