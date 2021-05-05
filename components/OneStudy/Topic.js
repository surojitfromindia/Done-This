import { BadgeCheckIcon } from "@heroicons/react/solid";
export default function Topic({ topics }) {
  //change the checkmark to green if it is a done task
  let isAllDone = topics.reduce((x, a) => x && a.done, true);

  return (
    <div
      className={`px-5 py-3  bg-gradient-to-tl  from-lightBlue-500 to-indigo-600 rounded-md ${
        isAllDone ? "to-teal-600" : ""
      } `}
    >
      {isAllDone && (
        <span className={"text-2xl font-medium text-teal-100"}>
          Good! You Are Ready !
        </span>
      )}
      <div className={"my-5"}>
        <ul className={"max-w-md"}>
          {topics.map(({ type, des, done }, idx) => (
            <li className={"my-2"} key={idx}>
              <div className={"flex"}>
                <BadgeCheckIcon
                  className={`w-5 h-5 mr-1.5 mt-1 flex-shrink-0 ${
                    done ? "text-green-300" : ""
                  } text-gray-200`}
                />
                <span className={"text-gray-100 "}>
                  {type && <span className={"text-orange-100 font-medium"}>{`[${type}]`}</span>}{" "}
                  {des}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
