import "./style/Work.css";
const Work = ({ HandleClick }) => {
  return (
    <section id="Works" className="containt__works">
      <div className="Containt_text">
        <span className="Title"> MIS PROYECTOS</span>
        <h2 className="Text__for__work">
          Estos son trabajos que he realizado durante 5 meses en Academlo
        </h2>
      </div>

      <div className="Contain__works">
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
              En este proyecto, se realiza un ecomerce con la tecnologia de
              javascript. Simulando el uso de un API, logrando separar por
              categorias, realizar compras, cambiar a modo nocturno, etc.
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
              Este es mi primer proyecto de react con la cual genero de manera
              aleatorias, frases de una galleta de la fortuna, al presionar el
              boton, con fondo tambien aleatorios
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
              Este proyecto te informa del clima a traves de un API, y se puede
              conocer tu ubicación he informarte el clima. Se puede cambiar de
              Fahrenheit a Celcius y viceversa
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
              En esta aplicacion se consume un API de los personajes de Rick and
              Morty, mostrando su información, y podiendo categorizar por
              localización dichos personajes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
