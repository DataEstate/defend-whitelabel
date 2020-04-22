import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { EstateCardStarRatings } from "../EstateCardStarRatings";

describe("src/components/Estates/EstateCardStarRatings", () => {
  it("can render component", () => {
    const stubData = {
      id: "test-id",
      rating: 3.5
    };

    const fakeComponent = shallow(
      <EstateCardStarRatings
        id={stubData.id}
        rating={stubData.rating}
      />
    );

    expect(fakeComponent.find("EstateCardStarRatings")).to.exist;
    
    // will be render StarRatingIcons component (detail will 
    // be on StarRatingIcons unit test)
    expect(fakeComponent.find("StarRatingIcons")).to.exist;
  });
});
