import "tailwindcss/tailwind.css";
import NavBar from "../components/Navbar";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import NavBarWithButton from "../components/NavBarWithButton";

function MyApp({ Component, pageProps }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <body className={"absolute  bg-coolGray-800 top-0 bottom-0 left-0 right-0"}>
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
          className={
            "h-12 w-12 justify-center items-center flex rounded-full bg-gradient-to-tr from-lightBlue-600 to-indigo-400 "
          }
        >
          <MenuIcon className={"w-5 h-5 text-gray-50 "} />
        </div>
      </div>
    </body>
  );
}

export default MyApp;
