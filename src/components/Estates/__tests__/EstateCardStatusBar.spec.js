import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { EstateCardStatusBar } from "../EstateCardStatusBar";

describe("src/components/Estates/EstateCardStatusBar", () => {
  it("can render component", () => {
    const stubData = {
      id: "test-id",
      children: <p className={"test-children-status-bar"}>Status Bar Children Node</p>
    };

    const fakeComponent = mount(
      <EstateCardStatusBar
        id={stubData.id}
        children={stubData.children}
      />
    );

    expect(fakeComponent.find("EstateCardStatusBar")).to.exist;

    // check children node rendered or not
    expect(fakeComponent.find("EstateCardStatusBar").hasClass("test-children-status-bar")).to.exist;
    
  });
});
