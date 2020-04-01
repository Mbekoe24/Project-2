import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomeB = () => (
  <Link to="/players">
    <button>Next Page</button>
  </Link>
);

export default HomeB;
