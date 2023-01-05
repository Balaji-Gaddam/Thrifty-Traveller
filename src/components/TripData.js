import "../components/Trip.css";
import Trip from "./Trip";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="card-image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="btn1">
        <a className="buttonn" href={props.url}>
          <button alt="buttonK">KNOW MORE</button>
        </a>
      </div>
    </div>
  );
}

export default TripData;
