import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Route } from "react-router-dom";
import PlayerList from "./components/PlayerList/PlayerList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  // add the rest of the tests here
  //TEST 1
  it("should have a state attribute called players initialized to empty array", () => {
    expect(component.state("players")).toEqual([]);
  });
  //TEST 2
  it("should render route within the return", () => {
    expect(component.contains(<Route />));
  });
  //TEST 3
  it("should render a Player List within the return", () => {
    expect(component.contains(<PlayerList />));
  });
  //TEST 4
  it("should render a Footer within the return", () => {
    expect(component.contains(<Footer />));
  });
  //TEST 5
  it("should render a Header within the return", () => {
    expect(component.contains(<Header />));
  });
  //TEST 6
  it("should have a state attribute called team initialized to empty array", () => {
    expect(component.state("team")).toEqual([]);
  });
  //TEST 7

  //TEST 8

  //TEST 9

  //TEST 10

  //TEST 11

  //TEST 12

  //TEST 13

  //TEST 14

  //TEST 15
});
