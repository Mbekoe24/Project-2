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

  componentDidMount = async () => {
    const listURL = "https://nba-players.herokuapp.com/players/"; //
    const response = await axios(listURL);

    this.setState({
      leaguePlayers: response.data
    });
  };

  // // alphabetize first names
  // playerArray = playerNames.split(" "), playerArray.sort()
  ////// DONT DELETE

  render() {
    let playerNames = this.props.players.map((player, index) => (
      <div>
        <Link
          to={`player/profile/${player.name.split(" ")[1]}/${
            player.name.split(" ")[0]
          }`}
        >
          <li className="player" key={index}>
            {player.name}{" "}
          </li>
        </Link>
        <li className="team"> {player.team_name} </li>
      </div>
    ));

    return (
      <>
        <div className="grid-container">
          <ul className="column">{playerNames}</ul>
        </div>
      </>
    );
  }
}

export default PlayerList;
