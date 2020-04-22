import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { EstateCard } from "../EstateCard";
import { Card } from "@material-ui/core";

describe("src/components/Estates/EstateCard", () => {
  it("can render component", () => {
    const stubData = {
      id: "test-id",
      name: "test-name",
      state_code: "test-state_code",
      category: "test-category",
      locality: "test-locality",
      description: "test-desc",
      star_rating: 3.5,
      rate_from: 385,
      hero_image: {
        path: 'https://source.unsplash.com/random'
      },
    };

    const fakeComponent = shallow(<EstateCard estateData={stubData} />);

    expect(fakeComponent.find(Card).prop("data-test-id")).to.equal("test-id");

    // check other child component whether its loaded or not
    expect(fakeComponent.find("EstateCardImageContainer")).to.exist;
    expect(fakeComponent.find("EstateCardStatusBar")).to.exist;
    expect(fakeComponent.find("EstateCardStarRatings")).to.exist;
    expect(fakeComponent.find("EstateCardContent")).to.exist;
    expect(fakeComponent.find("EstateCardFooter")).to.exist;

  });
});
