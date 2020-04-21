import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import NavigationHeader from "../NavigationHeader";

describe("src/components/Navigation/NavigationHeader", () => {
  it("can render the component", () => {
    const stubProps = {
      title: "Navigation Header",
      menuItems: [
        {
          to: "/",
          name: "One",
        },
        {
          to: "/list",
          name: "Second",
        },
      ],
    };

    const mockComponent = shallow(<NavigationHeader {...stubProps} />);

    expect(mockComponent.find(".Navigation__title").text()).to.equal(
      stubProps.title
    );
    expect(mockComponent.find("NavigationItem")).to.have.length(2);
    mockComponent.find("NavigationItem").forEach((mockItem, idx) => {
      expect(mockItem.prop("name")).to.equal(stubProps.menuItems[idx].name);
    });
  });
});
