import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // stats:
      playerImg: []
      // ppg: [],
    };
  }
  componentDidMount = async () => {
    const response1 = await axios(
      //response 1 is the img
      `https://nba-players.herokuapp.com/players/${this.props.match.params.lastName}/${this.props.match.params.firstName}`
    );
    console.log(response1);

    const response2 = await axios(
      // response 2 is the stats
      `https://nba-players.herokuapp.com/players-stats/${this.props.match.params.lastName}/${this.props.match.params.firstName}`
    );

    console.log(response2.data);

    this.setState({
      playerImg: response1.config.url
    });
  };

  statsWanted = [
    "points_per_game",
    "assists_per_game",
    "blocks_per_game",
    "steals_per_game",
    "rebounds_per_game"
  ];

  render() {
    return (
      <div>
        <p>
          <span> {this.state</span>
        </p>
        <img src={this.state.playerImg} />
      </div>
    );
  }
}

export default Profile;
