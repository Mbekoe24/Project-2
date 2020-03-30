import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerImg: []
    };
  }
  componentDidMount = async () => {
    const response1 = await axios("https://nba-players.herokuapp.com/players/");
    console.log(response1.data);

    const response2 = await axios(
      `https://nba-players.herokuapp.com/players-stats/:lastName/:firstName`
    );

    console.log(response2.data);

    this.setState({
      playerImg: response1.data
    });
  };

  // {
  //   props.heroes.map((hero, idx) => (
  //     <div className="polariod">
  //       <Link to={`/profiles/${hero}`} key={idx}>
  //         <img src={hero.image_url} alt="superhero" />
  //       </Link>
  //       <div value="name">
  //         <span>{hero.name}</span>
  //       </div>
  //     </div>
  //   ));
  // }

  render() {
    return <div></div>;
  }
}

export default Profile;
