import { useEffect, useState } from "react";
import UseViewport from "../hooks/UseViewport";
import "./style/Navbar.css";

const Navbar = ({ HandleMenu, HandleLinks }) => {
  const [navbarScrol, setsNabvarScroll] = useState(false);
  const { isMobile } = UseViewport();

  const changeNavbarScroll = () => {
    if (window.scrollY > 10) {
      setsNabvarScroll(true);
    } else {
      setsNabvarScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbarScroll);

  return (
    <div className={navbarScrol ? "navbarActiveScroll" : "Navbar"}>
      <div className="contain_Logo">
        <h1>
          <a className="Logo" href="#Me">
            Walter.M
          </a>
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
