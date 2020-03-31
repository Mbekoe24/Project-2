import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/players">
            <h1>NBA Players</h1>
          </Link>
        </nav>
      </header>
    </div>
  );
}

//  <Route exact path="/" render={() => <Heroes heroes={this.state.heroes} />} />;

export default Header;
