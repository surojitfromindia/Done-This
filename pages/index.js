import {
  UpcomigCard,
  NewStudyCard,
  OldStudyCard,
  SubjectCard,
} from "../components/HomePageComponents/HomeExport";
import Greet from "../components/ComonoComponents/Greet";

export default function Home() {
  return (
    <div className={" mb-36 mt-10 grid auto-rows-min"}>
      <div className={"px-5 py-3"}>
        <Greet
          heading=" Hello, CoolCore"
          emoji="🥶"
          body="Good Morning."
          sub={"Congratulation, you have done quite well last time"}
        />
      </div>
      <div
        className={
          "mt-5 mb-10 py-3 px-5 grid gap-5 sm:grid-cols-2 :grid-cols-3 lg:grid-cols-4"
        }
      >
        <div name={"upcoming"} id={"upcoming"}>
          <UpcomigCard />
        </div>
        <div name={"newstudy"} id={"newstudy"}>
          <NewStudyCard />
        </div>
        <div name={"oldstudy"} id={"oldstudy"}>
          <OldStudyCard />
        </div>
      </div>
      <div className={"px-5 py-6"}>
        <span className={"text-2xl font-semibold text-teal-300"}>ENGLISH</span>
        <span className={"w-28 h-1  rounded-sm block bg-teal-400"}></span>
        <div
          className={
            "grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-3 mt-5 "
          }
        >
          <SubjectCard
            name={"Adjectives"}
            descriptions={"Describe state of an object."}
          />
          <SubjectCard
            name={"Nouns"}
            descriptions={"Describe state of an object."}
          />

          <SubjectCard
            name={"New Words"}
            descriptions={"Describe state of an object."}
          />
          <SubjectCard
            name={"New Words"}
            descriptions={"Describe state of an object."}
          />
        </div>
      </div>
      <div className={"px-5 py-6"}>
        <span className={"text-2xl font-semibold text-orange-300"}>MATH</span>
        <span className={"w-20 h-1 rounded-sm block bg-orange-400"}></span>
        <div
          className={
            "grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap  gap-5 mt-5 "
          }
        >
          <SubjectCard
            name={"Algebra"}
            descriptions={"Describe state of an object."}
          />
          <SubjectCard
            name={"Geometry"}
            descriptions={"Describe state of an object."}
          />
        </div>
      </div>
    </div>
  );
}
