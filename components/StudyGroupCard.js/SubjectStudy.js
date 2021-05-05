import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function SubjectStudy({ subjectData }) {
  return (
    <div className={"py-2"}>
      <span className={"text-xl text-orange-100"}>
        {subjectData.subjectName}
      </span>
      <div>
        <ul className={"my-2 max-w-md"}>
          {subjectData.points.map(({ type, des }, idx) => (
            <li className={"my-2"} key={idx}>
              <div className={"flex"}>
                <BadgeCheckIcon
                  className={"w-5 h-5 mr-1.5 mt-1 flex-shrink-0  text-gray-200"}
                />
                <span className={"text-gray-100 "}>
                  {type && <span className={"text-orange-100"}>[{type}]</span>}{" "}
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
