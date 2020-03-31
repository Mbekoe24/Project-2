import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerImg: [],
      stats: []
    };
  }
  componentDidMount = async () => {
    const response1 = await axios(
      //response 1 is the img
      `https://nba-players.herokuapp.com/players/${this.props.match.params.lastName}/${this.props.match.params.firstName}`
    );
    // console.log(response1);

    const response2 = await axios(
      // response 2 is the stats
      `https://nba-players.herokuapp.com/players-stats/${this.props.match.params.lastName}/${this.props.match.params.firstName}`
    );

    console.log(response2.data);

    this.setState({
      playerImg: response1.config.url, //image
      stats: response2.data // stats
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
        <div className="team-banner">
          <img src={this.state.playerImg} />

          <h1> {this.state.stats.name}</h1>

          <h1> {this.state.stats.team_name}</h1>

          <h1>
            <span>PTS: {this.state.stats.points_per_game}</span>
          </h1>

          <h1>
            <span>REB: {this.state.stats.rebounds_per_game}</span>
          </h1>

          <h1>
            <span>AST: {this.state.stats.assists_per_game}</span>
          </h1>

          <h1>
            <span>STLS: {this.state.stats.steals_per_game}</span>
          </h1>

          <h1>
            <span>BLKS: {this.state.stats.blocks_per_game}</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default Profile;
