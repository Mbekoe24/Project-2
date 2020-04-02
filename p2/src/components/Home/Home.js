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
          <h2> WELCOME TO MY NBA DATABASE</h2>
          This Database holds every NBA player in the <br /> 2017-2018 season.
          <br />
          On the next page, you can click on any player of your choosing from
          the NBA Players list and find out their season averages in an 82 game
          season. <br />
          Remember
        </p>
        <h3> "Men lie, Women lie, Stats Don't lie!" - Richard Sherman</h3>
        <iframe
          src="https://giphy.com/embed/M96bl1lwzuNfIkDwo2"
          width="480"
          height="300"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <HomeB className="home-nav" />
      </div>
    </div>
  );
}

export default Home;
