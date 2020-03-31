// axios CALL
import axios from "axios";

/// STYLING
import "./App.css";
import { Route, Link } from "react-router-dom";
// COMPONENTS
import React, { Component } from "react";
import PlayerList from "./components/PlayerList/PlayerList";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

// SETTING A LIST FOR ALL NBA PLAYERS & IMAGES FOR EACH NBA PLAYER

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      team: [],
      logo: [
        {
          ATL: {
            TeamCity: "Atlanta",
            TeamName: "Hawks",
            TeamID: 1610612737,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/ATL_logo.svg",
            TeamCode: "ATL"
          },
          BOS: {
            TeamCity: "Boston",
            TeamName: "Celtics",
            TeamID: 1610612738,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/BOS_logo.svg",
            TeamCode: "BOS"
          },
          BKN: {
            TeamCity: "Brooklyn",
            TeamName: "Nets",
            TeamID: 1610612751,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/BKN_logo.svg",
            TeamCode: "BKN"
          },
          CHA: {
            TeamCity: "Charlotte",
            TeamName: "Hornets",
            TeamID: 1610612766,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/CHA_logo.svg",
            TeamCode: "CHA"
          },
          CHI: {
            TeamCity: "Chicago",
            TeamName: "Bulls",
            TeamID: 1610612741,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/CHI_logo.svg",
            TeamCode: "CHI"
          },
          CLE: {
            TeamCity: "Cleveland",
            TeamName: "Cavaliers",
            TeamID: 1610612739,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/CLE_logo.svg",
            TeamCode: "CLE"
          },
          DAL: {
            TeamCity: "Dallas",
            TeamName: "Mavericks",
            TeamID: 1610612742,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/DAL_logo.svg",
            TeamCode: "DAL"
          },
          DEN: {
            TeamCity: "Denver",
            TeamName: "Nuggets",
            TeamID: 1610612743,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/DEN_logo.svg",
            TeamCode: "DEN"
          },
          DET: {
            TeamCity: "Detroit",
            TeamName: "Pistons",
            TeamID: 1610612765,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/DET_logo.svg",
            TeamCode: "DET"
          },
          GSW: {
            TeamCity: "Golden State",
            TeamName: "Warriors",
            TeamID: 1610612744,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/GSW_logo.svg",
            TeamCode: "GSW"
          },
          HOU: {
            TeamCity: "Houston",
            TeamName: "Rockets",
            TeamID: 1610612745,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/HOU_logo.svg",
            TeamCode: "HOU"
          },
          IND: {
            TeamCity: "Indiana",
            TeamName: "Pacers",
            TeamID: 1610612754,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/IND_logo.svg",
            TeamCode: "IND"
          },
          LAC: {
            TeamCity: "Los Angeles",
            TeamName: "Clippers",
            TeamID: 1610612746,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/LAC_logo.svg",
            TeamCode: "LAC"
          },
          LAL: {
            TeamCity: "Los Angeles",
            TeamName: "Lakers",
            TeamID: 1610612747,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/LAL_logo.svg",
            TeamCode: "LAL"
          },
          MEM: {
            TeamCity: "Memphis",
            TeamName: "Grizzlies",
            TeamID: 1610612763,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/MEM_logo.svg",
            TeamCode: "MEM"
          },
          MIA: {
            TeamCity: "Miami",
            TeamName: "Heat",
            TeamID: 1610612748,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/MIA_logo.svg",
            TeamCode: "MIA"
          },
          MIL: {
            TeamCity: "Milwaukee",
            TeamName: "Bucks",
            TeamID: 1610612749,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/MIL_logo.svg",
            TeamCode: "MIL"
          },
          MIN: {
            TeamCity: "Minnesota",
            TeamName: "Timberwolves",
            TeamID: 1610612750,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/MIN_logo.svg",
            TeamCode: "MIN"
          },
          NOP: {
            TeamCity: "New Orleans",
            TeamName: "Pelicans",
            TeamID: 1610612740,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/NOP_logo.svg",
            TeamCode: "NOP"
          },
          NYK: {
            TeamCity: "New York",
            TeamName: "Knicks",
            TeamID: 1610612752,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/NYK_logo.svg",
            TeamCode: "NYK"
          },
          OKC: {
            TeamCity: "Oklahoma City",
            TeamName: "Thunder",
            TeamID: 1610612760,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/OKC_logo.svg",
            TeamCode: "OKC"
          },
          ORL: {
            TeamCity: "Orlando",
            TeamName: "Magic",
            TeamID: 1610612753,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/ORL_logo.svg",
            TeamCode: "ORL"
          },
          PHI: {
            TeamCity: "Philadelphia",
            TeamName: "76ers",
            TeamID: 1610612755,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/PHI_logo.svg",
            TeamCode: "PHI"
          },
          PHX: {
            TeamCity: "Phoenix",
            TeamName: "Suns",
            TeamID: 1610612756,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/PHX_logo.svg",
            TeamCode: "PHX"
          },
          POR: {
            TeamCity: "Portland",
            TeamName: "Trailblazers",
            TeamID: 1610612757,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/POR_logo.svg",
            TeamCode: "POR"
          },
          SAC: {
            TeamCity: "Sacramento",
            TeamName: "Kings",
            TeamID: 1610612758,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/SAC_logo.svg",
            TeamCode: "SAC"
          },
          SAS: {
            TeamCity: "San Antonio",
            TeamName: "Spurs",
            TeamID: 1610612759,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/SAS_logo.svg",
            TeamCode: "SAS"
          },
          TOR: {
            TeamCity: "Toronto",
            TeamName: "Raptors",
            TeamID: 1610612761,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/TOR_logo.svg",
            TeamCode: "TOR"
          },
          UTA: {
            TeamCity: "Utah",
            TeamName: "Jazz",
            TeamID: 1610612762,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/UTA_logo.svg",
            TeamCode: "UTA"
          },
          WAS: {
            TeamCity: "Washington",
            TeamName: "Wizards",
            TeamID: 1610612764,
            TeamLogoURL:
              "https://stats.nba.com/media/img/teams/logos/WAS_logo.svg",
            TeamCode: "WAS"
          }
        }
      ]
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
          exact
          path="/players"
          render={props => (
            <PlayerList players={this.state.players} {...props} />
          )}
        />
        <Route
          exact
          path="/player/profile/:lastName/:firstName"
          render={props => <Profile {...props} />}
        />
      </div>
    );
  }
}

export default App;
