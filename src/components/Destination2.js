import "../components/Trip.css";

import TripData from "./TripData";
import AP from "/src/assests/AP.jpg";
import Kerala from "/src/assests/Kerala.jpg";
import Goa from "/src/assests/goa.jpg";
import Tamilnadu from "/src/assests/tamilnadu.jpg";
import Taj from "/src/assests/taj.jpg";
import Delhi from "/src/assests/delhi.jpg";

function Trip() {
  return (
    <div className="Trip">
      <p> you can discover unique destinations using google maps</p>
      <div className="tripCard">
        <TripData
          image={AP}
          heading="srilankaaaa"
          text="India is a medley of fascinating colours and culture,an historical legacy,a caanvas of architectural masterpieces, and an extravagant exuberance of royal splendor.!"
        />

        <TripData
          image={Kerala}
          heading="Kerala"
          text="Sri Lanka, the tea country island, is rich in cultural, archaeological and natural treasures. ."
        />

        <TripData
          image={Goa}
          heading="Goa"
          text="Bhutan, the serene mountain kingdom, untouched by modernity, still retains its old world charm.."
        />
      </div>
      <div className="tripCard">
        <TripData
          image={Tamilnadu}
          heading="Tamilnadu"
          text="The Kingdom of Nepal is an extravaganza of culture, heritage and natural Himalayan beauty. "
        />

        <TripData
          image={Taj}
          heading="Uttar Pradesh	"
          text="Maldives are a cluster of 1,190 emerald islands with dazzling green center of palm trees fringed with white sand and bordered by the clear turquoise Indian Ocean."
        />

        <TripData
          image={Delhi}
          heading="Delhi"
          text="India is a medley of fascinating colours and culture, an historical legacy,a caanvas of architectural masterpieces, and an extravagant exuberance of royal splendor. "
        />
      </div>
    </div>
  );
}
export default Trip;
