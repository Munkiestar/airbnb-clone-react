import React from "react";

import "./Home.css";
import Showcase from "../Showcase/Showcase";
import Card from "../Card/Card";

function Home() {
  return (
    <div className="home">
      {/*  Showcase  */}
      <Showcase />

      {/*  Cards  */}
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=480"
          description="Travel the world without leaving home."
          title="Online Experiences"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=480"
          description="Things to do wherever you are."
          title="Experiences"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480"
          description="Multi-day trips with meals and stays."
          title="Adventures"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>

      {/* Footer */}
    </div>
  );
}

export default Home;
