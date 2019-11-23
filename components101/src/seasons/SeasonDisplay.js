import React from "react";
import SeasonDecider from "./SeasonDecider";
import Spinner from "./Spinner";

class SeasonDisplay extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("component mounted!");

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("component updated!");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDecider lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }
}

export default SeasonDisplay;
