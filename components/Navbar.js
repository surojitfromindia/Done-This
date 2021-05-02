import { useState } from "react";
import { links } from "../utils/links";
import OneMenu from "./OneMenu";

export default function Navbar({ show }) {
  return (
    <div className={"group bg-emerald-700 px-5 py-4  font-medium text-gray-100"}>
      <h1
        className={` transition-all delay-75 ease-in-out transform text-xl flex  ${
          show ? "max-h-0" : "max-h-72 "
        } overflow-hidden`}
      >
        Do This !
      </h1>

      <div
        className={`transition-all delay-100 ease-in-out transform -mx-1  flex justify-center  ${
          show ? "max-h-96 py-5" : "max-h-0 my-0"
        } overflow-hidden text-sm group-hover:max-h-96 flex flex-col gap-1 text-gray-200`}
      >
        <OneMenu menu={links[0]} cname={"Home"} isArrowShow={false} />
        <OneMenu menu={links[1]} cname={"About"} isArrowShow={false} />
      </div>
    </div>
  );
}
