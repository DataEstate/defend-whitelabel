import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { SmartFilter } from "../SmartFilter";

describe("src/components/Common/SmartFilter", () => {
  it("can render component as non select type and controlled", () => {
    let inputValue = "some value";

    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="text"
      value={inputValue}
      onChange={(x) => inputValue = x}
    />);

    mockComponent.find("input").simulate('change', { target: { value: 'new value' } });
    expect(inputValue.value).to.equal("new value");
  });

  it("can render component as non select type and uncontrolled", () => {
    let inputValue = "some value";

    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="text"
      onChange={(x) => inputValue = x}
    />);

    mockComponent.find("input").simulate('change', { target: { value: 'new value' } });
    expect(inputValue.value).to.equal("new value");
  });

  it("can render component as single select type and controlled", () => {
    let inputValue = "1";
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      value={inputValue}
      options={options}
      onChange={(x) => inputValue = x}
    />);

    const event = { target: { name: "SmartFilter", value: "2" } };
    mockComponent.find("SmartFilter").simulate('change', event);
    mockComponent.update();
    expect(mockComponent.find("Select")).to.exist;
    // console.log(mockComponent.find("SmartFilter").props());
  });

  it("can render component as single select type and uncontrolled", () => {
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      options={options}
      onChange={(x) => inputValue = x}
    />);

    const event = { target: { name: "SmartFilter", value: "2" } };
    mockComponent.find("SmartFilter").simulate('change', event);
    mockComponent.update();
    expect(mockComponent.find("Select")).to.exist;
    // console.log(mockComponent.find("SmartFilter").props());
  });

  it("can render component as multiple select type and controlled", () => {
    let inputValue = "";
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      value={inputValue}
      options={options}
      onChange={(x) => inputValue = x}
      multiple
    />);

    const event = { target: { name: "SmartFilter", value: ["1", "2"] } };
    mockComponent.find("SmartFilter").simulate('change', event);
    mockComponent.update();
    expect(mockComponent.find("Select")).to.exist;
    // console.log(mockComponent.find("SmartFilter").props());
  });

  it("can render component as multiple select type and uncontrolled", () => {
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      options={options}
      onChange={(x) => inputValue = x}
      multiple
    />);

    const event = { target: { name: "SmartFilter", value: ["1", "2"] } };
    mockComponent.find("SmartFilter").simulate('change', event);
    mockComponent.update();
    expect(mockComponent.find("Select")).to.exist;
    // console.log(mockComponent.find("SmartFilter").props());
  });
});
