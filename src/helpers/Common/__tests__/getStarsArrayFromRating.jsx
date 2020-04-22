import React from "react";
import { expect } from "chai";
import { getStarsArrayFromRating } from "../getStarsArrayFromRating";

describe("src/helpers/Common/getStarsArrayFromRating", () => {
  it("can output array", () => {
    const stubStars1 = 4;
    const stubStars2 = 3.5;
    const stubStars3 = 0;

    const mockStars1 = getStarsArrayFromRating(stubStars1);
    const mockStars2 = getStarsArrayFromRating(stubStars2);
    const mockStars3 = getStarsArrayFromRating(stubStars3);

    expect(mockStars1).to.have.length(4);
    expect(mockStars2).to.have.length(4);
    expect(mockStars2[3]).to.equal(0.5);
    expect(mockStars3).to.have.length(0);
  });

  it("can output array with total", () => {
    const stubStars1 = 4;
    const stubStars2 = 3.5;
    const stubTotal = 6;

    const mockStars1 = getStarsArrayFromRating(stubStars1, stubTotal);
    const mockStars2 = getStarsArrayFromRating(stubStars2, stubTotal);

    expect(mockStars1).to.have.length(stubTotal);
    expect(mockStars1[stubTotal - 1]).to.equal(0);
    expect(mockStars2).to.have.length(stubTotal);
    expect(mockStars2[3]).to.equal(0.5);
    expect(mockStars2[4]).to.equal(0);
  });
});
