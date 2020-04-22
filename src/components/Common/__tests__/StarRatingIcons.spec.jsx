import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { StarRatingIcons } from "../StarRatingIcons";

describe("src/components/Common/StarRatingIcons", () => {
  it("can render component", () => {
    const stubProps = {
      rating: 4.5,
      className: "test-class",
    };

    const mockComponent = shallow(<StarRatingIcons {...stubProps} />);

    expect(mockComponent.find("StarIcon")).to.have.length(4);
    expect(mockComponent.find("StarHalfIcon")).to.have.length(1);
  });

  it("can render component", () => {
    const stubProps = {
      rating: 3,
      className: "test-class",
      total: 6,
    };

    const mockComponent = shallow(<StarRatingIcons {...stubProps} />);

    expect(mockComponent.find("StarIcon")).to.have.length(3);
    expect(mockComponent.find("StarHalfIcon")).to.have.length(0);
    expect(mockComponent.find("StarBorderIcon")).to.have.length(3);
  });
});
