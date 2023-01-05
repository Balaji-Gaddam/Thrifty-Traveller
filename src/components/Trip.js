import "../components/Trip.css";
import TripData from "./TripData";
import TripI from "/src/assests/TripI.jpg";
import TripS from "/src/assests/TripS.jpg";
import TripB from "/src/assests/TripB.jpg";
import TripN from "/src/assests/TripN.jpg";
import TripM from "/src/assests/TripM.jpg";
import TripJ from "/src/assests/TripJ.png";
import { Link } from "react-router-dom";

function Trip() {
  return (
    <div className="Trip">
      <h1>Destinations</h1>
      <p> you can discover unique destinations using google maps</p>
      <div className="tripCard">
        <TripData
          image={TripI}
          heading="INDIA"
          text="India is a medley of fascinating colours and culture,an historical legacy,a caanvas of architectural masterpieces, and an extravagant exuberance of royal splendor.!"
          url="/India"
        />

        <TripData
          image={TripS}
          heading="SRILANKA"
          text="Sri Lanka, the tea country island, is rich in cultural, archaeological and natural treasures. ."
          url="/Srilanka"
        />

        <TripData
          image={TripB}
          heading="BHUTAN"
          text="Bhutan, the serene mountain kingdom, untouched by modernity, still retains its old world charm.."
          url="/Bhutan"
        />
      </div>
      <div className="tripCard">
        <TripData
          image={TripN}
          heading="NEPAL"
          text="The Kingdom of Nepal is an extravaganza of culture, heritage and natural Himalayan beauty. "
          url="/Nepal"
        />

        <TripData
          image={TripM}
          heading="MALDIVES"
          text="Maldives are a cluster of 1,190 emerald islands with dazzling green center of palm trees fringed with white sand and bordered by the clear turquoise Indian Ocean."
          url="/Maldivs"
        />

        <TripData
          image={TripJ}
          heading="JAPAN"
          text="Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. "
          url="/Japan"
        />
      </div>
    </div>
  );
}
export default Trip;
