import Hero from "../routers/Hero";
import "../routers/Service.css";
import ServiceImg from "/src/assests/card_notebook_travel_125500_3840x2400.jpg";
import Footer from "../Footer";
import Trip from "../Trip";
import Hotel from "/src/components/Hotel.js";

function Service() {
  return (
    <>
      <Hero
        cName="hero-Service"
        heroImg={ServiceImg}
        title="DESTINATIONS"
        // buttonText="Make A plan"
        url="/"
        // btnClass="show"
      />
      <Trip />
      <Hotel />
    </>
  );
}

export default Service;
