import React from "react";

export default function Greet() {
  return (
    <div>
      <div className={"block text-4xl"}>
        <span
          className={` font-bold  bg-gradient-to-r w-max bg-clip-text text-transparent
         from-lightBlue-400 via-lightBlue-300 to-lightBlue-200 `}
        >
          Hello, CoolCore
        </span>{" "}
        <span>🥶</span>
      </div>
      <span className={"block tracking-wider mt-3 text-lg text-trueGray-200"}>
        Good Morning.
      </span>
      <span className={"tracking-wide block text-sm text-trueGray-400"}>
        Congratulation, you have done quite well last time
      </span>
    </div>
  );
}
