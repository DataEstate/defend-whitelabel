import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { EstateCardContent } from "../EstateCardContent";
import { Grid, Typography } from "@material-ui/core";

describe("src/components/Estates/EstateCardContent", () => {
  it("can render component with infoBlock and extra", () => {
    const stubData = {
      id: "test-id",
      subheading: "test-subheading",
      heading: "test-heading",
      infoBlock: (
        <Grid item xs={4}>
          <div>
            <Typography variant={"caption"}>from </Typography>
            <Typography variant={"caption"}>$350</Typography>
          </div>
        </Grid>
      ),
      description: "test-desc",
      extra: (
        <p className={"test-extra"}>test-extra</p>
      ),
    };

    const fakeComponent = mount(
      <EstateCardContent
        id={stubData.id}
        subheading={stubData.subheading}
        heading={stubData.heading}
        infoBlock={stubData.infoBlock}
        description={stubData.description}
        extra={stubData.extra}
      />
    );

    expect(fakeComponent.find("EstateCardContent")).to.exist;

    // if infoblock exists then heading will have 8 grid unit (MuiGrid-grid-xs-8) 
    // and the infoblock will be 4 grid unit (MuiGrid-grid-xs-4)
    expect(fakeComponent.find("EstateCardContent").hasClass("MuiGrid-grid-xs-8")).to.exist;
    expect(fakeComponent.find("EstateCardContent").hasClass("MuiGrid-grid-xs-4")).to.exist;

    // check extra rendered or not
    expect(fakeComponent.find("EstateCardContent").hasClass("test-extra")).to.exist;

  });

  it("can render component without infoBlock and extra", () => {
    const stubData = {
      id: "test-id",
      subheading: "test-subheading",
      heading: "test-heading",
      description: "test-desc",
    };

    const fakeComponent = mount(
      <EstateCardContent
        id={stubData.id}
        subheading={stubData.subheading}
        heading={stubData.heading}
        description={stubData.description}
      />
    );

    expect(fakeComponent.find("EstateCardContent")).to.exist;

    // if infoblock exists then heading will have 12 grid unit (MuiGrid-grid-xs-12) 
    expect(fakeComponent.find("EstateCardContent").hasClass("MuiGrid-grid-xs-12")).to.exist;

    // check extra rendered or not
    expect(fakeComponent.find("EstateCardContent").hasClass("test-extra")).to.false;

  });
});
