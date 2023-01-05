import "../routers/Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroimg" src={props.heroImg} />
        <div className="HeroText">
          <h2>{props.title}</h2>

          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
