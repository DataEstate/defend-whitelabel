import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { EstateCard } from "../EstateCard";
import { Card } from "@material-ui/core";

describe("src/components/Estates/EstateCard", () => {
  it("can render component", () => {
    const stubData = {
      id: "test-id",
      name: "test-name",
      state_code: "test-state_code",
      category: "test-category",
      locality: "test-locality",
      description: "test-desc"
    };

    const fakeComponent = shallow(<EstateCard estateData={stubData} />);

    expect(fakeComponent.find(Card).prop("data-test-id")).to.equal("test-id");
  });
});
