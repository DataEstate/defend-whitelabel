import react from "react";
import { expect } from "chai";
import getQueryParams from "../getQueryParams";

describe("src/helpers/Estates/getQueryParams", () => {
  it("can parse url parameters into object", () => {
    const stubQueryParams = "state=NSW&category_code=ACCOMM";
    const expectedObject = {
      state: "NSW",
      category_code: "ACCOMM"
    }

    const mockQueryParams = getQueryParams(stubQueryParams);

    // must use JSON.stringify to passed (https://github.com/facebook/jest/issues/5998)
    expect(JSON.stringify(mockQueryParams)).to.equal(JSON.stringify(expectedObject));
  });
});
