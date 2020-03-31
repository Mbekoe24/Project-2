import React, { Component } from "react";
import axios from "axios";
import "./PlayerList.css";
import { Route, Link } from "react-router-dom";

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaguePlayers: []
    };
  }
 

  componentDidMount = async () => {

    const listURL = "https://nba-players.herokuapp.com/players/"; //
    const response = await axios(listURL);

    this.setState({
      leaguePlayers: response.data
    });
  };



  setBackground = () => {
    if (this.props.players.team_acronym === this.props.logo.TeamCode) {

    }
  };






  render() {
    let playerNames = this.props.players.map((player, index) => (
      <>
        <Link
          to={`player/profile/${player.name.split(" ")[1]}/${
            player.name.split(" ")[0]
          }`}
        >
          <li key={index}>{player.name} </li>
        </Link>
        <li> {player.team_name} </li>{" "}
      </>
    ));

    return (
      <>
        {/* <div> <span> PLyaer </span></div> */}
        <div className="grid-container">
          <ul>{playerNames}</ul>
        </div>
      </>
    );
  }
}

export default PlayerList;