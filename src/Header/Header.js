import React from "react";

import airbnb_logo from "../assets/logo-airbnb.png";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={airbnb_logo} alt="Airbnb Logo" className="header__logo" />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
