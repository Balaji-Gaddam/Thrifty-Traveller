import "../components/AboutUs.css";
import Aboutimg from "../assests/AboutImg.jpg";

function AboutUs() {
  return (
    <div className="about-container">
      <div data-aos="fade-right" className="about-text">
        <h1>About Thrifty Traveler.</h1>
        <p>
          Thrifty Traveler was born from a necessity to offer a better SEO and
          digital marketing service, and actually help businesses. Having been a
          travel SEO marketer and consultant for 10 years, Matt found there was
          no specific travel SEO service that explained exactly what they
          offered… and delivered. Fiverr, Freelancer and Upwork became tiresome
          to manage, with flakey freelancers and expensive mistakes. Fed up with
          paying other peoples’ “school fees”, Thrifty Traveler was created.
        </p>
        <p>
          You will never get sold something that we don’t know how to do. We
          believe in getting you a positive ROI on your marketing investment and
          will do everything in our power to do so, or we won’t take you on at
          all.
        </p>
        <p>
          Right now, we believe we are one of the best SEO travel marketing
          agencies in the world, working to build a full-service marketing team
          in all aspects of the marketing process.
        </p>
      </div>

      <div data-aos="fade-left" className="about-image">
        <img alt="aboutImg" src={Aboutimg} />
      </div>
    </div>
  );
}

export default AboutUs;
