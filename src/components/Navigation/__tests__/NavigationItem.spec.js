import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { Typography } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import NavigationItem from "../NavigationItem";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("src/components/Navigation/NavigationItem", () => {
  it("can render component", () => {
    const mockCallback = jest.fn((x, y, z) => {});
    const stubProps = {
      name: "Menu 1",
      to: "/",
      onClick: mockCallback,
    };

    const mockComponent = shallow(<NavigationItem {...stubProps} />);
    mockComponent.find("button").invoke("onClick")();

    expect(mockComponent.find(Typography).text()).to.equal(stubProps.name);
    expect(mockCallback.mock.calls.length).to.equal(1);
    expect(mockCallback.mock.calls[0][1]).to.equal(stubProps.to);
    expect(mockCallback.mock.calls[0][2]).to.be.null;
  });

  it("can render submenu", () => {
    const mockCallback = jest.fn((x, y, z) => {});
    const stubProps = {
      name: "Menu 2",
      onClick: mockCallback,
      submenu: [
        {
          to: "/",
          name: "Submenu 1",
        },
        {
          to: "/list",
          name: "Submenu 2",
        },
      ],
    };

    const mockComponent = shallow(<NavigationItem {...stubProps} />);
    mockComponent.find("button").invoke("onClick")();

    expect(mockComponent.find(".SubmenuItem__list")).to.have.length(2);
    mockComponent.find(".SubmenuItem__list").forEach((mockSubmenuItem, idx) => {
      expect(mockSubmenuItem.text()).to.equal(stubProps.submenu[idx].name);
    });
  });
});
