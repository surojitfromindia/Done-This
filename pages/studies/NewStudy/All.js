import React from "react";
import Greet from "../../../components/ComonoComponents/Greet";
import AllNewStudy from "../../../components/StudyGroupCard.js/AllNewStudy";

export default function All() {
  return (
    <div className={"px-5 py-5 mt-3"}>
      <Greet heading="Hey, Ready to Roll !" backG="to-rose-500  from-red-400" />
      <div className={"mt-10"}>
        <AllNewStudy />
      </div>
    </div>
  );
}
