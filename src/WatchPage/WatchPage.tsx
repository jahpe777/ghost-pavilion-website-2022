import "./WatchPage.css";

const WatchPage = () => {
  return (
    <div className="watchpage">
      <section className="video-spacing">
        <iframe
          className="videos"
          title="fallout"
          width="46.3%"
          height="473"
          src="https://www.youtube.com/embed/2rXg6gEFyTo"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="video-spacing">
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
      <section className="video-spacing">
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
      <section className="video-spacing">
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
