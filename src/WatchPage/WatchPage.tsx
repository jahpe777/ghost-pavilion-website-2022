import "./WatchPage.css";

const WatchPage = () => {
  return (
    <div className="watchpage">
      <section className="fallout">
        <iframe
          className="videos"
          title="fallout"
          width="46.3%"
          height="473"
          // src="https://www.youtube.com/watch?v=eTaPTcasXYc&list=PL3t0Jj5omGP5txirQfAhWFHuVfVp3G-nJ&index=5"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="black-and-blue">
        <iframe
          className="videos"
          title="blackandblue"
          width="46.3%"
          height="473"
          src="https://www.youtube.com/embed/7Uu_pHFaeuo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="vacant-stories">
        <iframe
          className="videos"
          title="vacantstories"
          width="46.3%"
          height="473"
          src="https://www.youtube.com/embed/zvsYVJa-D_8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="live-video">
        <iframe
          className="videos"
          title="livevideo"
          width="46.3%"
          height="473"
          src="https://www.youtube.com/embed/6Phl_yT9XK4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default WatchPage;
