import { useState } from "react";
import "./style/HandleMenuForMobile.css";

const MobileMenu = ({ menu, isMobile, HandleMenu, HandleLinks }) => {
  return (
    <div className={menu ? "Menu" : ""}>
      {menu && isMobile && (
        <div className="containt_bx-x">
          <i className="bx bx-x" onClick={HandleMenu}></i>
        </div>
      )}
      {menu && (
        <div className="containt_Menu_Items">
          <ul className="Menu_Items">
            <li>
              <a href="#Me" className="menu_Item" onClick={HandleLinks}>
                Experience
              </a>
            </li>
            <li>
              <a href="#Works" className="menu_Item" onClick={HandleLinks}>
                Work
              </a>
            </li>
            <li>
              <a
                href="#Photography"
                className="menu_Item"
                onClick={HandleLinks}
              >
                Photography
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="Contanct_Mobile"
                onClick={HandleLinks}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
