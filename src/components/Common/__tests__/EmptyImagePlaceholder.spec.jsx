import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import { EmptyImagePlaceholder } from "../EmptyImagePlaceholder";

describe("src/components/Common/EmptyImagePlaceholder", () => {
  it("can render component", () => {
    const mockComponent = mount(<EmptyImagePlaceholder height={'200px'}/>);

    // check height is changed or not
    expect(getComputedStyle(mockComponent.getDOMNode()).getPropertyValue('height')).to.equal('200px');
    // check photo icon loaded or not
    expect(mockComponent.find("PhotoIcon")).to.exist;
  });
});
