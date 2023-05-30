import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import UseViewport from "./hooks/UseViewport";
import MobileMenu from "./components/MobileMenu";
import Home_Experience from "./components/Home_Experience";
function App() {
  const [menu, setMenu] = useState();
  const HandleMenu = () => {
    console.log("me estas dando click para abri el menu");
    console.log(menu);
    setMenu(!menu);
  };
  const HandleLinks = () => {
    setMenu(!menu);
    console.log("quieres ir a donde dice");
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
      </div>
    </>
  );
}

export default App;
