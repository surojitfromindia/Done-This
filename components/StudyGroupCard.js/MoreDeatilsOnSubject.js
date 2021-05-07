import React from "react";
import Link from "next/link";
import { BadgeCheckIcon } from "@heroicons/react/solid";
let backG = "from-lightBlue-700  to-rose-600";
let doneG = "from-teal-700  to-green-600";
export default function MoreDeatilsOnSubject({ subjectData, isDone = false }) {
  return (
    <div
      id={subjectData?.subjectName}
      className={`flex flex-col justify-between transition-all hover:-mx-1 px-5 py-3 rounded-md bg-gradient-to-tr  ${
        isDone ? doneG : backG
      }`}
    >
      <div>
        <div className={"flex flex-row justify-between mb-1 items-center"}>
          <span className={"font-medium tracking-wider text-lg text-gray-100"}>
            {subjectData?.subjectName}
          </span>

          {isDone && (
            <span
              className={
                "bg-gray-50 px-2 py-0.5 rounded-xl bg-opacity-30 text-xs text-gray-100"
              }
            >
              DONE
            </span>
          )}
        </div>
        <div className={"block leading-4 text-sm   text-red-200 "}>
          <ul
            className={
              "scrollbar flex flex-col list-none max-h-28 overflow-y-auto  "
            }
          >
            {subjectData.points.map(({ type, des, done }, idx) => (
              <li className={"my-1"} key={idx}>
                <div className={"flex items-start max-h-9 overflow-hidden "}>
                  <BadgeCheckIcon
                    className={`w-5 h-5 mr-1.5 mt-1 flex-shrink-0 ${
                      done ? "text-green-300" : ""
                    } text-gray-200`}
                  />
                  <span className={"text-gray-100 leading-[1.125rem] "}>
                    {type && (
                      <span className={"text-orange-100"}>[{type}]</span>
                    )}{" "}
                    {des}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={"flex flex-col justify-start"}>
        <div className={"block leading-5 text-sm mb-1.5 mt-3"}>
          <span className={"text-xl  text-coolGray-200 font-medium"}>
            {subjectData.points.length}
          </span>
          <span className={"text-sm text-coolGray-200 ml-1"}>excersise</span>
        </div>
        <button
          className={
            "pointer-events-auto outline-none text-sm font-medium tracking-wider focus:outline-none w-16 px-3 py-1 rounded-md hover:bg-opacity-30 bg-coolGray-100 bg-opacity-20 text-warmGray-100"
          }
        >
          <Link href={`/studies/NewStudy/${subjectData?.subjectName}`}>
            view
          </Link>
        </button>
      </div>
    </div>
  );
}
