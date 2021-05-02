import "tailwindcss/tailwind.css";
import NavBar from "../components/Navbar";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className={"sticky top-0"}>
        <NavBar show={showNav} />
      </div>

      <Component {...pageProps} />
      <div
        className={
          "bg-lightBlue-700 flex fixed bottom-10 right-5 h-12 w-12 rounded-full hover:bg-lightBlue-800"
        }
      >
        <MenuIcon
          onClick={() => setShowNav(!showNav)}
          className={"px-2 py-2 text-gray-50"}
        />
      </div>
    </div>
  );
}

export default MyApp;
