import React, { Component } from "react";
import axios from "axios";
import "./PlayerList.css";

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerImg: []
    };
  }
  // statsURL = "https://nba-players.herokuapp.com/players-stats/";

  componentDidMount = async () => {
    const imageURL = "https://nba-players.herokuapp.com/players/";
    const response = await axios(imageURL);
    console.log(response.data);

    this.setState({
      playerImg: response.data
    });
  };

  reverseName() {
    let str = this.props.players.split("");
    let reverse = str.reverse();
    let join = reverse.join("");
    console.log(join);
    return join;
  }

  render() {
    let playerNames = this.props.players.map((player, index) => (
      <li key={index}>{player.name}</li>
    ));

    return (
      <div>
        <h1>Player List</h1>
        <ul>{playerNames}</ul>
      </div>
    );
  }
}

export default PlayerList;
