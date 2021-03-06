import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { EstateCard } from "../EstateCard";
import { EstateCards } from "../EstateCards";

describe("src/components/Estates/EstateCards", () => {
  it("can render component and match the child total component", () => {
    let stubData = [
      {
        id: 'test-1',
        name: 'Estate 1',
        state_code: 'State Code 1',
        category: 'Category 1',
        locality: 'Locality 1',
        description: 'Description 1'
      },
      {
        id: 'test-2',
        name: 'Estate 2',
        state_code: 'State Code 2',
        category: 'Category 2',
        locality: 'Locality 2',
        description: 'Description 2'
      }
    ];

    const fakeComponent = shallow(
      <EstateCards 
        id="EstateListing"
        list={stubData}
      />
    );

    expect(fakeComponent.find(EstateCard)).to.have.length(2);
  });
});
