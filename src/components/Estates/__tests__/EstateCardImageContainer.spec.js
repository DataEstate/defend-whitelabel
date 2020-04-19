import React from "react";
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import { EstateCardImageContainer } from "../EstateCardImageContainer";

describe("src/components/Estates/EstateCardImageContainer", () => {
  it("can render component with image url", () => {
    const stubData = {
      id: "test-id",
      url: "some-url",
      title: "some-title"
    };

    const fakeComponent = mount(
      <EstateCardImageContainer
        id={stubData.id}
        url={stubData.url}
        title={stubData.title}
      />
    );

    expect(fakeComponent.find("EstateCardImageContainer")).to.exist;

    // check url string
    expect(fakeComponent.find("img").prop("src")).to.equal("some-url");

  });

  it("can render component without image url", () => {
    const stubData = {
      id: "test-id",
      title: "some-title"
    };

    const fakeComponent = shallow(
      <EstateCardImageContainer
        id={stubData.id}
        title={stubData.title}
      />
    );

    expect(fakeComponent.find("EstateCardImageContainer")).to.exist;
    
    // will be render EmptyImagePlaceholder component (detail will 
    // be on EmptyImagePlaceholder unit test)
    expect(fakeComponent.find("EmptyImagePlaceholder")).to.exist;
  });
});
