import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDecider = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const seasonLogic =
    season === "winter" ? "It is winter my dudes" : "Summer is here!";
  return (
    <div>
      <h1>{seasonLogic}</h1>
    </div>
  );
};

export default SeasonDecider;
