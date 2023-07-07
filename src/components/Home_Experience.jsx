import "./style/Home_Experience.css";
const Home_Experience = () => {
  return (
    <section>
      <div id="Me" className="ME">
        <div className="experience_home">
          <h1>
            <a
              href="https://www.linkedin.com/in/walter-medina-berrios-90008627b/"
              target="_blank"
              className="menuItem__Desktop"
            >
              Experience
            </a>
          </h1>
        </div>
        <div className="work_home">
          <h1>
            <a href="#Works" className="menuItem__Desktop">
              Works
            </a>
          </h1>
        </div>
        <div className="lenguaje_home">
          <h1>
            <a href="#Stack" className="menuItem__Desktop">
              Stack
            </a>
          </h1>
        </div>
        <div className="contact_home">
          <h1>
            {" "}
            <a href="#Contact" className="">
              Contact
            </a>
          </h1>
        </div>
        <div className="card_presetantion">
          <div className="Containt__Title">
            <h1>
              Yo soy Walter. Un frontend developer
              <span className="Span__Title"> de Perú.</span>
            </h1>
          </div>
          <div className="back-photo">
            <div className="photo">
              <img src="../../../walter.jpg" alt="" />
            </div>
          </div>
          <div className="Containt__P">
            <p>
              Soy una persona curiosa, siempre abierto a nuevas tecnologias, se
              me da bien trabajar en equipo. Si tienes un gran proyecto que
              necesita algo increíble, estoy para ayudarle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Experience;
