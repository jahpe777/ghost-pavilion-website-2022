import { Link } from "react-router-dom";
import "./LandingPage.css";
import video from "../../src/Video/Fallout (clip).mp4";
import image from "../../src/Images/GP_300DPI.jpeg";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <video autoPlay loop muted className="landingpage-video">
        <source src={video} type="video/mp4" />
      </video>
      <section className="image-landingpage">
        <Link to="/listen">
          <img src={image} alt="Ghost Pavilion Artwork" />
        </Link>
        <div>
          Publicist - Bobby Cleveland - bobbycleveland@babyrobotmedia.com
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
