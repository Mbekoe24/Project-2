import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="title-container">
        <h1>NBA DATABASE</h1>
      </div>
      <p className="greeting-container">
        Welcome to my NBA DATABASE! This Database holds every NBA player in the
        2017-2018 season.
        <br />
        On the next page, you can click on one player from the NBA Players list
        and find out their season averages in an 82 game season. Have fun, and
        remeber "Men lie, Women lie, but Stats don't lie" - Richard Sherman!
      </p>
    </div>
  );
}

export default Home;
