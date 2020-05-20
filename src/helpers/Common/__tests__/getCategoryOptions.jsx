import React from "react";
import { expect } from "chai";
import { getCategoryOptions } from "../getCategoryOptions";

describe("src/helpers/Common/getCategoryOptions", () => {
  it("can get categories options", () => {
    const categoriesOptions = getCategoryOptions();

    const compareOptions = [
      { value: "ACCOMM", label: "Accommodation" },
      { value: "ATTRACTION", label: "Attraction" },
      { value: "TOUR", label: "Tour" },
      { value: "EVENT", label: "Event" },
      { value: "RESTAURANT", label: "Restaurants" }
    ];

    // must use JSON.stringify to passed (https://github.com/facebook/jest/issues/5998)
    expect(JSON.stringify(categoriesOptions)).to.equal(JSON.stringify(compareOptions));
  });
});
