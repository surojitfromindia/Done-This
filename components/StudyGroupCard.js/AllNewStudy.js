import React from "react";
import MoreDeatilsOnSubject from "./MoreDeatilsOnSubject";
import SubjectStudy from "./SubjectStudy";

export default function AllNewStudy() {
  const AllSubjects = [
    {
      subjectName: "English",
      done: true,
      points: [
        {
          type: "Read",
          des: "Study my print programe.",
        },
        {
          type: "Write",
          des: "Study my print programe.",
        },
      ],
    },
    {
      subjectName: "Math",
      done: false,
      points: [
        {
          type: "Read",
          des:
            "learn about computer memories. Read chapter 3 in yourbook. I have hightlighted few importance point today. Read them carefully.",
        },
        {
          type: "Read",
          des: "Study my print programe.",
        },
      ],
    },
    {
      subjectName: "Computer",
      done: false,
      points: [
        {
          type: "Read",
          des:
            "learn about computer memories. Read chapter 3 in yourbook. I have hightlighted few importance point today. Read them carefully.",
        },
      ],
    },
    {
      subjectName: "Geography",
      points: [
        {
          type: "Read",
          des:
            "learn about computer memories. Read chapter 3 in yourbook. I have hightlighted few importance point today. Read them carefully.",
        },
      ],
    },
    {
      subjectName: "History",
      done : true,
      points: [
        {
          type: "Write",
          des: "Questions Are given check more on the question panel",
        },
      ],
    },
  ];
  return (
    <div className={"flex flex-col gap-3"}>
      <div
        className={
          "rounded-md shadow-xl flex gap-3 flex-wrap divide-y sm:divide-y-0 divide-red-400 px-5  bg-gradient-to-br from-rose-500  to-red-400"
        }
      >
        {AllSubjects.map((subject) => (
          <SubjectStudy subjectData={subject} key={subject.subjectName} />
        ))}
      </div>
      <div className={"text-3xl mt-5 text-gray-100"}>Topics</div>
      <div
        className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"}
      >
        {AllSubjects.map((subject, idx) => (
          <MoreDeatilsOnSubject
            subjectData={subject}
            key={subject.subjectName}
            isDone={subject?.done}
          />
        ))}
      </div>
    </div>
  );
}
