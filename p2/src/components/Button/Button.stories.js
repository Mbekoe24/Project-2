import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("NBA-Player", () => <Button label="NBA-Players" type="NBA-Players" />)
  .add("Home", () => <Button label="Home" type="Home" />)
  // .add("Warning", () => <Button label="Warning" type="warning" />)
  // .add("Success", () => <Button label="Success" type="success" />);
