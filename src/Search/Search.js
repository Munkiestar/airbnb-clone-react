import React, { useState } from "react";

import "./Search.css";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";

// Date Picker
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="search__info">
        <h3>Number of guests:</h3>
        <input type="number" min={0} defaultValue={2} />
        <PeopleIcon />

        <Button>Search Airbnb</Button>
      </div>
    </div>
  );
}

export default Search;
