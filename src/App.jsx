import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import UseViewport from "./hooks/UseViewport";
import MobileMenu from "./components/MobileMenu";
import Home_Experience from "./components/Home_Experience";
import Work from "./components/Work";
import WorkForDesktop from "./components/WorkForDesktop";
import Contact from "./components/Contact";
function App() {
  const [menu, setMenu] = useState();
  const HandleMenu = () => {
    setMenu(!menu);
  };
  const HandleLinks = () => {
    setMenu(!menu);
  };
  const HandleClick = (url) => {
    window.open(url);
  };
  const { width, isMobile } = UseViewport();

  return (
    <>
      <div className="app">
        {!menu && <Navbar HandleMenu={HandleMenu} menu={menu} />}

        {menu && (
          <MobileMenu
            menu={menu}
            isMobile={isMobile}
            HandleMenu={HandleMenu}
            HandleLinks={HandleLinks}
          />
        )}
        <Home_Experience />

        {isMobile ? (
          <Work HandleClick={HandleClick} />
        ) : (
          <WorkForDesktop HandleClick={HandleClick} />
        )}
        <Contact />
      </div>
    </>
  );
}

export default App;
