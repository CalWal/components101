import React from "react";

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Latitude: {this.state.lat}</h1>
        <h1>Longitude: {this.state.long}</h1>
      </div>
    );
  }
}

export default SeasonDisplay;
