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
              <a
                className="menu_Item"
                href="https://www.linkedin.com/in/walter-medina-berrios-90008627b/"
                target="_blank"
                onClick={HandleLinks}
              >
                Experience
              </a>
            </li>
            <li>
              <a href="#Works" className="menu_Item" onClick={HandleLinks}>
                Work
              </a>
            </li>
            <li>
              <a href="#Stack" className="menu_Item" onClick={HandleLinks}>
                Stack
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
