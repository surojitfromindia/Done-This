import Greet from "../../../components/CommonComponents/Greet";
import AllNewStudy from "../../../components/StudyGroupCard.js/AllNewStudy";
import axios from "axios";
import PrgBar from "../../../components/CommonComponents/PrgBar";
import { useEffect, useState } from "react";

let y;
let prev = 0;
export default function All({ data }) {
  const [pV, setPv] = useState(prev);
  let AllSubjects = data.map((sub) => ({
    subjectName: sub.subName,
    done: sub.done,
    points: sub.topic,
  }));
  let max = data.reduce((a, x) => a + x.topic.length, 0);
  let val = data.reduce(
    (a, sub) =>
      a + sub.topic.filter((onetopic) => onetopic.done === true).length,
    0
  );

  useEffect(() => {
    y = setTimeout(() => {
      setPv(val);
      prev = val;
    }, 400);

    return () => {
      clearTimeout(y);
    };
  }, [data]);

  return (
    <div className={"px-5 py-5 mt-3"}>
      <Greet heading="Hey, Ready to Roll !" backG="to-rose-500 from-red-400" />
      <div className={"w-60 sm:w-80 mt-10"}>
        <div
          className={"text-xl font-medium tracking-wide  mb-1.5 text-red-400"}
        >
          <span className={""}>Your</span> <span>Proggress</span>
        </div>
        <PrgBar max={max} value={pV} min={0} />
      </div>
      <div className={"mt-10"}>
        <AllNewStudy AllSubjects={AllSubjects} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get(`https://doneback.herokuapp.com/all`);
  return {
    props: {
      data,
    },
  };
}
