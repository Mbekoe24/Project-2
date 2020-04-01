import React, { Component } from "react";
import axios from "axios";
import "./Profile.css";
// import { Route, Link } from "react-router-dom";

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
    console.log(response1);

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

  // TeamLogoURL;

  setBackground = teamLogo => {
    return teamLogo.TeamLogoURL && this.state.stats
      ? teamLogo.TeamCode.toLowerCase().includes(this.state.stats.team_acronym)
      : true;
    // this.state.stats.team_acronym.includes(this.props.team)
    // this.props.teamLogo.find(logo => {
    //   // return this.state.stats.team_acronym === logo.TeamCode.toLowerCase();
    // });
  };

  render() {
    return (
      <div className="container">
        <img
          className="teamLogo"
          src={this.props.teamLogo
            .filter(this.setBackground)
            .map(logo => logo.TeamLogoURL)}
        />
        <div className="player-background">
          <div>
            <img className="player-img" src={this.state.playerImg} />

            <p className="text-container">{this.state.stats.name}</p>
            <p className="text-container"> {this.state.stats.team_name}</p>
          </div>

          <section className="player-table-stats">
            <table role="grid">
              <thead>
                <tr className="stat-name">
                  <th>
                    <span> 2017- 2018</span>
                  </th>
                  <th scope="col">
                    <abbr title="Minutes Per Game">MPG</abbr>
                  </th>

                  <th>
                    <abbr title="Field Goal Percentage">FG%</abbr>
                  </th>

                  <th>
                    <abbr title="Three Point Percentage">3P%</abbr>
                  </th>

                  <th>
                    <abbr title="Free Throw Percentage">FT%</abbr>
                  </th>

                  <th>
                    <abbr title="Points Per Game">PPG</abbr>
                  </th>

                  <th>
                    <abbr title="Rebounds Per Game">RPG</abbr>
                  </th>

                  <th>
                    <abbr title="Assists Per Game">APG</abbr>
                  </th>

                  <th>
                    <abbr title="Blocks Per Game">BPG</abbr>
                  </th>

                  <th>
                    <abbr title="Blocks Per Game">STLS</abbr>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="stats">
                  <th scope="row">SEASON</th>

                  <td>{this.state.stats.minutes_per_game}</td>

                  <td>{this.state.stats.field_goal_percentage}</td>

                  <td>{this.state.stats.three_point_percentage} </td>

                  <td>{this.state.stats.free_throw_percentage} </td>

                  <td>{this.state.stats.points_per_game} </td>
                  <td>{this.state.stats.rebounds_per_game} </td>
                  <td> {this.state.stats.assists_per_game}</td>
                  <td>{this.state.stats.steals_per_game}</td>
                  <td>{this.state.stats.blocks_per_game}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;
