import React from "react";
import "./Home.css";

import HomeB from "./HomeB";
function Home() {
  return (
    <div className="flex">
      <div>
        <h1>NBA DATABASE</h1>
      </div>

      <div>
        <p className="greeting-container">
          <h2 className="title"> WELCOME TO MY NBA DATABASE</h2>
          This Database holds every NBA player in the <br /> 2017-2018 season.
          <br />
          On the next page, you can click on any player of your choosing from
          the NBA Players list and find out their season averages in an 82 game
          season. <br />
          Remember
        </p>
        <h3>"Men lie, Women lie, Stats Don't lie!"- Richard Sherman</h3>
        <img
          className="giphy"
          src="https://media.giphy.com/media/M96bl1lwzuNfIkDwo2/source.gif"
        ></img>
        <HomeB className="home-nav" />
      </div>
    </div>
  );

  // <iframe src="https://giphy.com/embed/M96bl1lwzuNfIkDwo2" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/49ers-25-richard-sherman-sherm-M96bl1lwzuNfIkDwo2">via GIPHY</a></p>
}

export default Home;
