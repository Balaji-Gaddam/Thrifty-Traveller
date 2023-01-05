import Hero from "../routers/Hero";
import "../routers/About.css";
import AboutImg from "/src/assests/travel_map_compass_123078_3840x2400.jpg";
import Footer from "../Footer";
import AboutUS from "../AboutUs";

function About() {
  return (
    <>
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About Us"
        // buttonText="Make A plan"
        url="/"
        // btnClass="show"
      />
      <AboutUS />
    </>
  );
}

export default About;
