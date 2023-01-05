import Hero from "../routers/Hero";
import "../routers/Contact.css";
import ContactImg from "/src/assests/233073.jpg";
import Footer from "../Footer";
import ContactUs from "../ContactUs";

function Contact() {
  return (
    <>
      <Hero
        cName="hero-Contact"
        heroImg={ContactImg}
        title="CONTACT US"
        // buttonText="Make A plan"
        url="/"
        // btnClass="show"
      />
      <ContactUs />
    </>
  );
}

export default Contact;
