import { useState } from "react";
import { links } from "../utils/links";
import LoginAvater from "./ComonoComponents/LoginAvater";
import OneMenu from "./OneMenu";

export default function Navbar({ show }) {
  return (
    <div
      className={
        "group bg-gradient-to-tr from-lightBlue-600 to-indigo-400 px-5 py-2   text-gray-100"
      }
    >
      <div
        className={`transition-all delay-75 ease-in-out transform  ${
          show ? "sm:max-h-0 " : "sm:max-h-72 "
        } overflow-hidden flex justify-between items-center`}
      >
        <h1 className={`text-xl font-medium `}>Do This !</h1>
        <div>
          <LoginAvater />
        </div>
      </div>

      <div
        className={`hidden sm:flex flex-col transition-all delay-100 ease-in-out transform -mx-1   justify-center  ${
          show ? "max-h-96 py-1.5" : "max-h-0 my-0"
        } overflow-hidden text-sm group-hover:max-h-96   gap-1 font-medium text-gray-200`}
      >
        <OneMenu menu={links[0]} cname={"Home"} isArrowShow={false} />
        <OneMenu menu={links[1]} cname={"About"} isArrowShow={false} />
      </div>
    </div>
  );
}
