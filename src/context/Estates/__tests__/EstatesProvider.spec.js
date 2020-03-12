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
    const mockConsumer = fakeProps => {
      expect(fakeProps.list.length).to.equal(0);
      expect(fakeProps.listData).to.deep.equal({});
      return <div>fake</div>;
    };
    const fakeComponent = mount(
      <ConfigurationProvider config={stubConfig}>
        <EstatesProvider>
          <EstatesContext.Consumer>{mockConsumer}</EstatesContext.Consumer>
        </EstatesProvider>
      </ConfigurationProvider>
    );
  });
});
