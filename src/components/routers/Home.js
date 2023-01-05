import Hero from "../routers/Hero";
import HeroImg from "/src/assests/185289.jpg";
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="LIFE IS NOT MEANT TO BE IN ONE PLACE."
        buttonText="Make A plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </>
  );
}

export default Home;
