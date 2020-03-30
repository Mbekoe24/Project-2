// axios CALL
import axios from "axios";

/// STYLING
import "./App.css";
import { Route, Link } from "react-router-dom";
// COMPONENTS
import React, { Component } from "react";
import PlayerList from "./PlayerList";
import Header from "./Header";
import Profile from "./Profile";

// SETTING A LIST FOR ALL NBA PLAYERS & IMAGES FOR EACH NBA PLAYER

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      playerImg: []
    };
  }
  // API CALL
  componentDidMount = async () => {
    const response = await axios(
      " https://nba-players.herokuapp.com/players-stats/"
    );
    console.log(response.data);
    this.setState({
      players: response.data
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Route
          path="/players/"
          render={props => (
            <PlayerList players={this.state.players} {...props} />
          )}
        />
        <Route
          path="/player/profile/:lastName/:firstName"
          component={Profile}
        />
      </div>
    );
  }
}

export default App;
