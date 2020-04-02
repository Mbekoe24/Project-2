import React, { Component } from "react";
import axios from "axios";
import "./PlayerList.css";
import { Link } from "react-router-dom";

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leaguePlayers: []
    };
  }
  ///API CALL
  componentDidMount = async () => {
    const listURL = "https://nba-players.herokuapp.com/players/"; //
    const response = await axios(listURL);

    this.setState({
      leaguePlayers: response.data
    });
  };

  render() {
    ///SORTING PLAYERS BY FIRST NAME
    const sortedPlayers = this.props.players.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    ///MAPPING THROUGH THE FUNCTION
    let playerNames = sortedPlayers.map(player => (
      <div key={player.name}>
        <Link
          // FLIPPING NAME ORDER FROM FIRST TO LAST TO LAST TO FIRST FOR API REQUIREMENT
          to={`player/profile/${player.name.split(" ")[1]}/${
            player.name.split(" ")[0]
          }`}
        >
          {/* // PLAYER NAMES BEING LISTED */}
          <li className="player">{player.name} </li>
        </Link>
        {/* // TEAM NAMES BEING LISTED  */}
        <li className="team"> {player.team_name} </li>
      </div>
    ));

    return (
      <>
        <div className="grid-container">
          {/* // DATA BEING LISTED  */}
          <ul className="column">{playerNames}</ul>
        </div>
      </>
    );
  }
}

export default PlayerList;
