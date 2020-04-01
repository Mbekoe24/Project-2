import React from "react";
import { shallow } from "enzyme";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";
import App from "../../App";

describe("Profile component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Profile />);
  });

  it("should have a string called PPG", () => {
    expect(component.contains("PPG")).toBe(true);
  });
});
idk