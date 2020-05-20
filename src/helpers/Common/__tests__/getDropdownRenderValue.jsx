import React from "react";
import { expect } from "chai";
import { getCategoryOptions } from "../getCategoryOptions";
import { getDropdownRenderValue } from "../getDropdownRenderValue";

describe("src/helpers/Common/getDropdownRenderValue", () => {
  it("can show default label", () => {
    const options = getCategoryOptions();
    const selectedOptions = [];

    const renderedLabel = getDropdownRenderValue(selectedOptions, options, "Any categories", "Categories");

    expect(renderedLabel).to.equal("Any categories");
  });

  it("can show label for one selected option", () => {
    const options = getCategoryOptions();
    const selectedOptions = ["ACCOMM"];

    const renderedLabel = getDropdownRenderValue(selectedOptions, options, "Any categories", "Categories");

    expect(renderedLabel).to.equal("Accommodation");
  });

  it("can show label for multiple selected options", () => {
    const options = getCategoryOptions();
    const selectedOptions = ["TOUR", "EVENT"];

    const renderedLabel = getDropdownRenderValue(selectedOptions, options, "Any categories", "Categories");

    expect(renderedLabel).to.equal("Categories - 2");
  });
});
