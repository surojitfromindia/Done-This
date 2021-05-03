import "tailwindcss/tailwind.css";
import NavBar from "../components/Navbar";
import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import NavBarWithButton from "../components/NavBarWithButton";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList.add("bg-coolGray-800");
  }, []);
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={"absolute top-0 bottom-0 left-0 right-0"}>
      <div className={"sm:sticky top-0"}>
        <NavBar show={showNav} />
      </div>

      <div className={"flex-grow"}>
        <Component {...pageProps} />
      </div>
      <div
        className={
          " flex flex-col   items-end gap-4 justify-center fixed  bottom-10 right-5  "
        }
      >
        <div
          className={
            "w-40 -mr-2 bg-gradient-to-tr from-lightBlue-600 to-indigo-400 rounded-md sm:hidden"
          }
        >
          <NavBarWithButton show={showNav} />
        </div>

        <div
          onClick={() => setShowNav(!showNav)}
          style={{ width: "52px", height: "52px" }}
          className={
            "justify-center items-center flex rounded-full bg-gradient-to-tr from-lightBlue-700 to-indigo-800 "
          }
        >
          <MenuIcon className={"w-7 h-7 text-gray-50 "} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
