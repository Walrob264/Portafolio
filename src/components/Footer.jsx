import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containt_logo">
        <h2>
          <a className="logo" href="#Me">
            Walter.M
          </a>
        </h2>
        <div className="containt_icons">
          <ul className="containt_icons">
            <li>
              <a href="">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/walter.medinaberrios"
                target="_blank"
              >
                <i className="bx bxl-facebook-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/walter-medina-berrios-90008627b/"
                target="_blank"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="containt_seccions-pages">
        <ul className="containt_seccions-pages">
          <li>
            <a href="#Me" className="footer_links">
              Home
            </a>
          </li>
          <li>
            <a href="#Works" className="footer_links">
              Works
            </a>
          </li>
          <li>
            <a href="#Stack" className="footer_links">
              Stack
            </a>
          </li>
          <li>
            <a href="#Contact" className="footer_links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
