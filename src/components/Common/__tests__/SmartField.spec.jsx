import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import SmartField from "../SmartField";

describe("src/components/Common/SmartField", () => {
  it("can render component", () => {
    // Arrange
    const stubProps = {
      fieldType: "text",
      id: "testField",
      className: "test-SmartField",
      options: ["test1", "test2"]
    };
    // Act
    const mockComponent = shallow(<SmartField {...stubProps} />);

    // Assert
    expect(mockComponent.prop("id")).to.equal(stubProps.id);
    expect(mockComponent.prop("className")).to.equal(stubProps.className);
    expect(mockComponent.prop("options")).to.not.exist;
  });

  it("can render as select", () => {
    const stubProps = {
      fieldType: "select",
      id: "testSelect",
      className: "test-SmartField",
      options: ["test1", "test2"]
    };

    const mockComponent = shallow(<SmartField {...stubProps} />);

    expect(mockComponent.children().length).to.equal(2);
  });
});
