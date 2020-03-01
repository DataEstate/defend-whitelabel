import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { ConfigurationProvider } from "src/context/Configuration";
import EstatesProvider from "../EstatesProvider";
import EstatesContext from "../EstatesContext";

describe("src/context/Estates/EstatesProvider", () => {
  it("can render provider with config", () => {
    const stubConfig = {
      api: {
        baseUrl: "test_url",
        apiKey: "1234",
        defaultQuery: {
          pg: 1
        }
      }
    };
    const fakeComponent = mount(
      <ConfigurationProvider config={stubConfig}>
        <EstatesProvider />
      </ConfigurationProvider>
    );

    console.log(fakeComponent.debug());
  });
});
