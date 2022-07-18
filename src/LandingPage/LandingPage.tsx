import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <video autoPlay loop muted className="landingpage-video">
        <source src="../Video/Fallout.mp4" type="video/mp4" />
      </video>
      <section className="image-landingpage">
        <Link to="/listen">
          <img
            src="images/bleed_on_sunset_artwork.jpg"
            alt="Bleed on Sunset Artwork"
          />
        </Link>
        <div>
          Publicist - Bobby Cleveland - bobbycleveland@babyrobotmedia.com
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
