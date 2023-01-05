import "../components/Destination.css";
import { Component } from "react";
import Footer from "./Footer";

class AndhraData extends Component {
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
          <a
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="location"
            href="/https://www.oyorooms.com/"
          >
            <i class="fa-solid fa-location-dot"></i>
            {this.props.Hotels}
          </a>
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

export default AndhraData;
