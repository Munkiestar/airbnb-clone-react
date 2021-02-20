import React, { useState } from "react";

import "./Showcase.css";
import { Button } from "@material-ui/core";
import Search from "../Search/Search";

function Showcase() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="showcase">
      <div className="showcase__search">
        {/*  Search (Date Picker) Component */}
        {showSearch && <Search />}

        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="showcase__btnSearch"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <img
        className="showcase__img"
        src="https://a0.muscache.com/im/pictures/f0483d09-7d13-42d0-a40a-46d585c42220.jpg?im_w=1440"
        alt=""
      />

      <div className="showcase__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>

        <Button className="showcase__btn" variant="outlined">
          Explore nearby stays
        </Button>
      </div>
    </div>
  );
}

export default Showcase;
