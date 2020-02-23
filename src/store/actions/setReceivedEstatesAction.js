// @flow

type SetReceivedEstatesAction = (
  response: any,
  status: string,
  statusCode: string
) => {
  type: "SET_ESTATES_RESPONSE",
  response: any
};

export const setReceivedEstatesAction: SetReceivedEstatesAction = (
  response,
  status,
  statusCode
) => ({
  type: "SET_ESTATES_RESPONSE",
  response,
  status,
  statusCode
});

export default setReceivedEstatesAction;
