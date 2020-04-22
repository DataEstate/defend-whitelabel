import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { ListView } from "../ListView";

describe("src/screens/ListView", () => {
  it("jump to other pages with Link", () => {
    const fakeComponent = shallow(<ListView />);

    expect(fakeComponent.find("div").prop("id")).to.equal("ListViewScreen");
    expect(fakeComponent.find("EstatesProvider")).to.exist;
  });
});
