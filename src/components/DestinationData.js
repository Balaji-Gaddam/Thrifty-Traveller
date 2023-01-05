import "../components/Destination.css";
import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            {" "}
            {this.props.heading}
          </h2>
          <p
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            {this.props.text}
          </p>
        </div>
        <div className="Images">
          <img alt="img1" src={this.props.img1} />
          <img alt="img1" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
