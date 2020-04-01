import React from "react";
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => <h2 className={props.type}>{props.label}</h2>;

export default Button;
