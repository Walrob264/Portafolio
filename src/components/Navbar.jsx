import UseViewport from "../hooks/UseViewport";
import "./style/Navbar.css";

const Navbar = ({ HandleMenu, HandleLinks }) => {
  const { isMobile } = UseViewport();

  return (
    <div className="Navbar">
      <div className="contain_Logo">
        <h1 className="Logo">
          <a href="#Me">Walter.M</a>
        </h1>
      </div>
      {!isMobile && (
        <ul className="MenuforDesktop">
          <li>
            <a href="#Me" className="menuItem__Desktop" onClick={HandleLinks}>
              Experience
            </a>
          </li>
          <li>
            <a
              href="#Works"
              className="menuItem__Desktop"
              onClick={HandleLinks}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#Photography"
              className="menuItem__Desktop"
              onClick={HandleLinks}
            >
              Photography
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="Contanct__Desktop"
              onClick={HandleLinks}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      {isMobile && (
        <div className="contain_menu">
          {isMobile && (
            <i
              onClick={isMobile ? HandleMenu : null}
              className="bx bx-menu-alt-right"
            ></i>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
