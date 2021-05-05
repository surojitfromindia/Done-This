import React from "react";
import Greet from "../../../components/ComonoComponents/Greet";
import AllNewStudy from "../../../components/StudyGroupCard.js/AllNewStudy";
import { AllSubjectForToday } from "../../../utils/mockApi";
export default function All() {
  let AllSubjects = AllSubjectForToday.map((sub) => ({
    subjectName: sub.subName,
    done: sub.done,
    points: sub.topic,
  }));
  return (
    <div className={"px-5 py-5 mt-3"}>
      <Greet heading="Hey, Ready to Roll !" backG="to-rose-500  from-red-400" />
      <div className={"mt-10"}>
        <AllNewStudy AllSubjects={AllSubjects} />
      </div>
    </div>
  );
}
