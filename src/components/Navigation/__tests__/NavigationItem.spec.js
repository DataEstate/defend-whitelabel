import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import NavigationItem from "../NavigationItem";

describe("src/components/Navigation/NavigationItem", () => {
  it("can render component", () => {
    const stubProps = {
      name: "Menu 1",
      to: "/home",
      submenu: ["sub1", "sub2"],
    };

    const mockComponentWrapper = shallow(
      <BrowserRouter>
        <NavigationItem {...stubProps} />
      </BrowserRouter>
    );
    const mockComponent = mockComponentWrapper.find(NavigationItem);

    expect(mockComponent.prop("to")).to.equal(stubProps.to);
    expect(mockComponent.prop("name")).to.equal(stubProps.name);
    console.log(mockComponent.submenu);
  });
});
