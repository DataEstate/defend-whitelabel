import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { EstateCardFooter } from "../EstateCardFooter";

describe("src/components/Estates/EstateCardFooter", () => {
  it("can render component with extra button", () => {
    const stubData = {
      id: "test-id",
      primaryAction: {
        name: "primary-button",
        color: "primary",
      },
      secondaryAction: {
        name: "secondary-button",
        color: "secondary",
      },
      buttons: [
        {
          name: "extra-button-1",
          color: "primary",
        },
        {
          name: "extra-button-2",
          color: "primary",
        },
      ]
    };

    const fakeComponent = mount(
      <EstateCardFooter
        id={stubData.id}
        primaryAction={stubData.primaryAction}
        secondaryAction={stubData.secondaryAction}
        buttons={stubData.buttons}
      />
    );

    expect(fakeComponent.find("EstateCardFooter")).to.exist;
    // check primary and secondary
    expect(fakeComponent.find("span.MuiButton-label").at(0).text()).to.equal("primary-button");
    expect(fakeComponent.find("span.MuiButton-label").at(1).text()).to.equal("secondary-button");

    // check extra buttons
    expect(fakeComponent.find("span.MuiButton-label").at(2).text()).to.equal("extra-button-1");
    expect(fakeComponent.find("span.MuiButton-label").at(3).text()).to.equal("extra-button-2");

  });
});
