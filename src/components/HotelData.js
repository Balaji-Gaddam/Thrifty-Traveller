import "../components/Trip.css";
import Hotel from "./Hotel";

function HotelData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="card-image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default HotelData;
