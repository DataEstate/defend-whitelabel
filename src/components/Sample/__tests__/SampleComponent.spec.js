import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { SampleComponent } from "../SampleComponent";

describe("src/components/Sample/SampleComponent", () => {
  it("can render component", () => {
    const fakeComponent = shallow(<SampleComponent />);

    expect(fakeComponent.find(".test-button").text()).to.equal("Get Estates");
  });
});
