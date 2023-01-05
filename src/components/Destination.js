import Images1 from "../assests/image1.jpg";
import Images2 from "../assests/image2.jpg";
import Images3 from "../assests/image3.jpg";
import Images4 from "../assests/image4.jpg";
import Images5 from "../assests/image5.jpg";
import Images6 from "../assests/image6.jpg";
import Images7 from "../assests/image7.jpg";
import Images8 from "../assests/image8.jpg";
import Images9 from "../assests/image9.jpg";
import Images10 from "../assests/image10.jpg";

import "../components/Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Until you step into the unknown, you don’t know what you’re made of.{" "}
      </p>

      <DestinationData
        className="first-des"
        heading=" Eiffel Tower, Paris"
        text="The symbol of Paris and one of the most photographed structures in
       the world, a visit to the Eiffel Tower is a must for all travelers.
       Few landmarks inspire such a passion for travel as this single iron
       structure. Young travelers heading out on the road for the first
       time, couples looking for a special getaway, artists looking to spur
       their creativity, and romantics of all types are all drawn to Paris.
       This is a city where history and culture collide and where travelers
       of all kinds can find the experience they're after."
        img1={Images1}
        img2={Images2}
      />

      <DestinationData
        className="first-des-reverse"
        heading=" The Colosseum, Rome"
        text="The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. It's been a bucket-list destination of travelers for generations. And it does not disappoint.
        Set in the heart of the city, the Colosseum is an easy place to visit. Direct flights from around the world land in Rome daily, making it a destination you can visit in a weekend if you choose. Wander through Rome's ancient streets, tour the colosseum, and if time allows, plan a trip to other areas of Italy."
        img1={Images3}
        img2={Images4}
      />

      <DestinationData
        className="first-des"
        heading=" Statue of Liberty, New York City"
        text="America is full of great sights and places to visit, but it's the Statue of Liberty that represents the United States like no other place. This symbol of freedom in New York City was gifted by the French to the American people in 1896.


        Of all the attractions in New York City, this is one every tourist must see. The best thing to do at the Statue of Liberty is to take a ride up to her crown and soak up the view over the city. Access to the statue is via ferry, also a highlight of a visit."
        img1={Images5}
        img2={Images6}
      />

      <DestinationData
        className="first-des-reverse"
        heading=" The Taj Mahal, India"
        text="The most famous and largest structure still standing from the Roman Empire, the Colosseum is also the biggest attraction of modern-day Rome. It's been a bucket-list destination of travelers for generations. And it does not disappoint.
        Set in the heart of the city, the Colosseum is an easy place to visit. Direct flights from around the world land in Rome daily, making it a destination you can visit in a weekend if you choose. Wander through Rome's ancient streets, tour the colosseum, and if time allows, plan a trip to other areas of ItalyThe Taj Mahal is the one sight in India that all travelers need to see. The country is filled with incredible cities and fabulous places to visit, but the 17th-century Taj Mahal is the one place that says you've been to India.
        This mausoleum, commissioned by the Shah Jahan for his wife, Mumtaz Mahal, is known internationally as a symbol of love. This fantastic structure, made with inlaid precious and semi-precious stones, has to be visited to be fully appreciated.
        Its riverfront setting, surrounding gardens, and reflecting pools are also what make the Taj Mahal so special.."
        img1={Images7}
        img2={Images8}
      />

      <DestinationData
        className="first-des"
        heading=" Great Wall of China"
        text="n a land of modern cities and towering skyscrapers, the Great Wall of China, built between the 14th and 17th centuries, is a stark contrast but a striking image that all visitors to China should see.
        A stroll along the top of the wall provides an incredible view of the structure snaking off into the distance. The wall stretches an astounding 21,196 kilometers, through some remote areas.
        Many travelers seeing the sights of China choose to visit the wall on easily organized tours from Beijing, a relatively short motorcoach ride away.."
        img1={Images9}
        img2={Images10}
      />
    </div>
  );
};
export default Destination;
