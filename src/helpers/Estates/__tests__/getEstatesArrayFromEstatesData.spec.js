import react from "react";
import { expect } from "chai";
import getEstatesArrayFromEstatesData from "../getEstatesArrayFromEstatesData";

describe("src/helpers/Estates/getEstatesArrayFromEstatesData", () => {
  it("can get estates array", () => {
    const stubEstatesData = {
      estate1: {
        id: "estate1",
        name: "estateName1",
        category_code: "ACCOMM"
      },
      estate2: {
        id: "estate2",
        name: "estateName2",
        category_code: "EVENT"
      }
    };

    const mockEstatesArray = getEstatesArrayFromEstatesData(stubEstatesData);

    expect(mockEstatesArray).to.have.length(2);
    expect(mockEstatesArray[0].id).to.equal("estate1");
    expect(mockEstatesArray[1].name).to.equal("estateName2");
  });
});
