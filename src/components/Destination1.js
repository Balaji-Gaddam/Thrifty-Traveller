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
          heading="Andhrapradesh"
          text="Cheerful and serene, Andhra Pradesh is a land bristling with many heritage sites; the forts; citadels, mind boggling array of beautiful cliffs; stunning stretches of coast; magnificent ruins; pristine water lapping against golden powder and lip-smacking regional cuisines. Situated at the foot of Tirumala hills, Tirupati Balaji or the lord Venkatesa temple is said to be the home of one of the richest temples in the country........."
          url="/Andhrapradesh"
        />

        <TripData
          image={Kerala}
          heading="Kerala"
          text="Encompassing serenity, Kerala is a charming South Indian destination that should be in every traveller’s bucket list. Adorned with the emerald backwaters, sprawling and lush tea estates, pristine hill stations, and azure Arabian Sea, Kerala tourism boasts numerous tourist places with which you will fall in love instantly.
          In North Kerala, districts like Kasaragod, Kannur, Wayanad, Kozhikode, and Malappuram have many attractions for the tourists........         
         "
        />

        <TripData
          image={Goa}
          heading="Goa"
          text="The coastal paradise, Goa is not unknown to anyone. This tiny state in West India is famous for its plethora of beautiful beaches, great seafood, amazing nightlife, and thrilling watersports.

          Goa along with being a popular beach destination in India is a perfect honeymoon destination, a great getaway with friends, and an amazing family holiday place, which means, the place is filled with activities and attractions to keep all its visitors engaged..."
        />
      </div>
      <div className="tripCard">
        <TripData
          image={Tamilnadu}
          heading="Tamilnadu"
          text="The land where the tales and influence of Cholas, Pandyas, and Pallavas can still be seen and the beauty landscape, sacred temples, and imposing wildlife make you feel instantly connected with this tourist destination in India. It is not wrong to say if we call Tamil Nadu the heart of Incredible India. It is one of the top places to visit in India due to its rich culture and heritage.. "
        />

        <TripData
          image={Taj}
          heading="Uttar Pradesh	"
          text="Uttar Pradesh conjures an image of acres and acres wide swaying fields; ancient Hindu temples on the bank of meandering rivers; and towns and cities with narrow alleys where a rich culture inhabits. Home to one of the world’s ancient most cities, and that of the iconic Taj Mahal; the origin place of two most prominent religions as well as of one of the important classical dance forms in India, Uttar Pradesh in North India is an unmissable holiday destination."
        />

        <TripData
          image={Delhi}
          heading="Delhi"
          text="Delhi, for all the right reasons, is the national capital of incredible India. Synonymous with diversity, Delhi has always been the epicentre of all activities in India which is reflected in its tourism. Right from the time of Pandavas, it has served as a major strategic and cultural hub of the country and rightly so, today it’s an exhibition of the history of India. Travelling in Delhi isn’t just limited to history but it’s a step to take past and present hand in hand. Blended with modern advancements, Delhi is the modern-day city of Troy.  "
        />
      </div>
    </div>
  );
}
export default Trip;
