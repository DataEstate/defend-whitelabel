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
    expect(inputValue).to.equal("new value");
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
    expect(inputValue).to.equal("new value");
  });

  it("can render component as single select type and controlled", () => {
    let inputValue = "1";
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockCallback = jest.fn((x, y, z) => { });
    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      value={inputValue}
      options={options}
      onChange={mockCallback}
    />);

    expect(mockComponent.find("Select")).to.exist;

    // expect correct option items
    expect(mockComponent.find("SmartFilter").props().options.length).to.equal(2);

    // expect value onchange
    const event = { target: { value: "2" } };
    mockComponent.find('SmartFilter').invoke("onChange")(event);
    expect(mockCallback.mock.calls.length).to.equal(1);
    expect(mockCallback.mock.calls[0][0].target.value).to.equal("2");

  });

  it("can render component as single select type and uncontrolled", () => {
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockCallback = jest.fn((x, y, z) => { });
    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      options={options}
      onChange={mockCallback}
    />);

    expect(mockComponent.find("Select")).to.exist;

    // expect correct option items
    expect(mockComponent.find("SmartFilter").props().options.length).to.equal(2);

    // expect value onchange
    const event = { target: { value: "2" } };
    mockComponent.find('SmartFilter').invoke("onChange")(event);
    expect(mockCallback.mock.calls.length).to.equal(1);
    expect(mockCallback.mock.calls[0][0].target.value).to.equal("2");

  });

  it("can render component as multiple select type and controlled", () => {
    let inputValue = "";
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockCallback = jest.fn((x, y, z) => { });
    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      value={inputValue}
      options={options}
      onChange={mockCallback}
      multiple
    />);

    expect(mockComponent.find("Select")).to.exist;

    // expect correct option items
    expect(mockComponent.find("SmartFilter").props().options.length).to.equal(2);

    // expect value onchange
    const event = { target: { value: ["1", "2"] } };
    mockComponent.find('SmartFilter').invoke("onChange")(event);
    expect(mockCallback.mock.calls.length).to.equal(1);
    expect(mockCallback.mock.calls[0][0].target.value.length).to.equal(2);

  });

  it("can render component as multiple select type and uncontrolled", () => {
    const options = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" }
    ]

    const mockCallback = jest.fn((x, y, z) => { });
    const mockComponent = mount(<SmartFilter
      name="test-filter"
      label="Test Filter"
      placeholder="Filter placeholder"
      type="select"
      options={options}
      onChange={mockCallback}
      multiple
    />);

    expect(mockComponent.find("Select")).to.exist;

    // expect correct option items
    expect(mockComponent.find("SmartFilter").props().options.length).to.equal(2);

    // expect value onchange
    const event = { target: { value: ["1", "2"] } };
    mockComponent.find('SmartFilter').invoke("onChange")(event);
    expect(mockCallback.mock.calls.length).to.equal(1);
    expect(mockCallback.mock.calls[0][0].target.value.length).to.equal(2);
  });
});
