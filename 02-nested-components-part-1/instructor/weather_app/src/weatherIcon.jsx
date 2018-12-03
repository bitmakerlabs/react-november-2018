import React from "react";
import "./weatherIcon.css";

class WeatherIcon extends React.Component {
  render() {
    return (
      <div className="divIcon">
        <img src={this.props.img_url} alt="weather" />
        <p>
          <span style={{ "font-weight": "bold" }}>Condition: </span>
          {this.props.condition}
        </p>
        <p>
          <span style={{ "font-weight": "bold" }}>time:     </span>
          {this.props.time}
        </p>
      </div>
    );
  }
}

export default WeatherIcon;
