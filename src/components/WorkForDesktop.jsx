import "./style/Work.css";
const Work = ({ HandleClick }) => {
  return (
    <section id="Works" className="containt__works">
      <div className="Containt_text">
        <span className="Title"> MY PROJECTS</span>
        <h2 className="Text__for__work">
          Work that I’ve done for the past 3 months
        </h2>
      </div>
      <div className="works">
        <div className="image__work"></div>
        <div className="Texts__work">
          <h2
            className="Name__work"
            onClick={() =>
              HandleClick("https://ecomerceproyectoacademlo.netlify.app")
            }
          >
            Ecomerce Academlo
          </h2>
          <p className="Text__work">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nisi dolore. Culpa, beatae blanditiis. Commodi voluptatem quo,
            asperiores veniam error, architecto beatae suscipit porro similique
            recusandae tempora odio nemo nihil?
          </p>
        </div>
      </div>
      <div className="works">
        <div className="image__work-galleta"></div>
        <div className="Texts__work">
          <h2
            className="Name__work"
            onClick={() =>
              HandleClick("https://galletita-de-la-suerte.netlify.app")
            }
          >
            Galleta de la fortuna
          </h2>
          <p className="Text__work">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nisi dolore. Culpa, beatae blanditiis. Commodi voluptatem quo,
            asperiores veniam error, architecto beatae suscipit porro similique
            recusandae tempora odio nemo nihil?
          </p>
        </div>
      </div>
      <div className="works">
        <div className="image__work-wheater"></div>
        <div className="Texts__work">
          <h2
            className="Name__work"
            onClick={() =>
              HandleClick("https://weatherapp-walter.netlify.app/")
            }
          >
            Weather App
          </h2>
          <p className="Text__work">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nisi dolore. Culpa, beatae blanditiis. Commodi voluptatem quo,
            asperiores veniam error, architecto beatae suscipit porro similique
            recusandae tempora odio nemo nihil?
          </p>
        </div>
      </div>
      <div className="works">
        <div className="image__work-rickandmorty"></div>
        <div className="Texts__work">
          <h2
            className="Name__work"
            onClick={() =>
              HandleClick("https://rickandmorty-walter.netlify.app")
            }
          >
            Rick and Morty
          </h2>
          <p className="Text__work">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nisi dolore. Culpa, beatae blanditiis. Commodi voluptatem quo,
            asperiores veniam error, architecto beatae suscipit porro similique
            recusandae tempora odio nemo nihil?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
