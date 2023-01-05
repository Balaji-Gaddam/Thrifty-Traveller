import "../components/Hotel.css";
import HotelData from "./HotelData";
import Hotels from "/src/assests/Hotel.jpg";
import Resturents from "/src/assests/resturent.jpg";
import Travell from "/src/assests/Vechile.png";

function Hotel() {
  return (
    <div className="Trip">
      <h1>Be Quartered</h1>
      <p> Some of the best memories are made in flip flops</p>
      <div className="tripCard">
        <HotelData
          image={Hotels}
          heading="HOTELS"
          text="A hotel is a building where people stay, for example on holiday, paying for their rooms and meals. Synonyms: inn, motel, bed and breakfast, guest house More Synonyms of hotel.!"
        />

        <HotelData
          image={Resturents}
          heading="RESTURENTS"
          text="A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services."
        />

        <HotelData
          image={Travell}
          heading="Travel vehicles"
          text="Your own vehicle that you use for all your routine local driving could be a great way to take vacations and business trips. Because it is your own vehicle that you are using on your own time, it can allow you quite a lot of flexibility. You do not have the expense of booking travel via some other method such as airplane, train, or intercity bus, or of renting a vehicle once you arrive at your destination."
        />
      </div>
    </div>
  );
}
export default Hotel;
