import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <Button type="Home" label="Home" />
          </Link>
          <Link to="/players">
            <Button type="NBA-Player" label=" NBA Players" />
          </Link>
        </nav>
      </header>
    </div>
  );
}

//  <Route exact path="/" render={() => <Heroes heroes={this.state.heroes} />} />;

export default Header;
