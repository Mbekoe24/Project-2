import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Proceed", () => <Button label="Proceed" type="Proceed" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Success", () => <Button label="Success" type="success" />);
